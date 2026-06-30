// Monitor de editais — roda semanalmente (Vercel Cron, ver vercel.json).
// Para cada edital com `url`, baixa a página, calcula um hash do conteúdo e
// compara com o último hash salvo (KV). Se mudou, envia um e-mail de aviso.
//
// Segurança: se CRON_SECRET estiver definido, exige Authorization: Bearer <secret>
// (o Vercel Cron envia esse header automaticamente quando a env existe).
//
// Detecção de mudança depende do KV (ver app/lib/kv.ts). Sem KV, o endpoint
// roda mas não compara (apenas reporta), pois não há onde guardar o estado.

import { createHash } from "node:crypto";
import { editais } from "../../editais-data";
import { kvEnabled, kvGet, kvSet } from "../../lib/kv";
import { sendEmail } from "../../lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

async function pageHash(url: string): Promise<string | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "pt-BR,pt;q=0.9",
      },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const raw = await res.text();
    // Normaliza para reduzir falsos positivos (scripts, estilos, espaços).
    const text = raw
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/\s+/g, " ")
      .trim();
    return createHash("sha256").update(text).digest("hex");
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return new Response("Unauthorized", { status: 401 });
    }
  }

  const targets = editais.filter((e) => e.url);

  const results = await Promise.allSettled(
    targets.map(async (e) => {
      const hash = await pageHash(e.url!);
      if (!hash) return { e, ok: false, changed: false };
      const key = `edital:${e.n}`;
      const prev = await kvGet(key);
      const changed = Boolean(prev && prev !== hash);
      await kvSet(key, hash); // guarda o estado atual (também no primeiro acesso)
      return { e, ok: true, changed };
    }),
  );

  const changed = results
    .filter(
      (r): r is PromiseFulfilledResult<{ e: (typeof targets)[number]; ok: boolean; changed: boolean }> =>
        r.status === "fulfilled" && r.value.changed,
    )
    .map((r) => r.value.e);

  const failed = results.filter(
    (r) => r.status === "fulfilled" && !r.value.ok,
  ).length;

  let emailed = false;
  if (changed.length > 0) {
    const items = changed
      .map((e) => `<li><b>${e.n}</b> — <a href="${e.url}">${e.url}</a></li>`)
      .join("");
    const html = `<h2>Mudança detectada em edital</h2>
      <p>As páginas abaixo mudaram desde a última verificação. Vale conferir se saiu novo edital, abertura de inscrição ou data:</p>
      <ul>${items}</ul>
      <p style="color:#4C6A73">Aviso automático do site Pastinha Médica.</p>`;
    const text =
      "Mudança detectada em edital:\n" +
      changed.map((e) => `- ${e.n}: ${e.url}`).join("\n");
    emailed = await sendEmail({
      subject: "Pastinha Médica — mudança em edital detectada",
      html,
      text,
    });
  }

  return Response.json({
    checked: targets.length,
    failed,
    kv: kvEnabled(),
    changed: changed.map((e) => e.n),
    emailed,
  });
}
