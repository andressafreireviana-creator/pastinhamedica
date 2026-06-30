// Armazenamento chave-valor opcional (Upstash Redis REST / Vercel KV) usado
// pelo monitor de editais para lembrar o estado anterior de cada página e só
// avisar quando houver mudança real. Sem ele, a detecção de mudança fica
// desativada (o endpoint apenas reporta, sem comparar).

const base = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

export function kvEnabled() {
  return Boolean(base && token);
}

export async function kvGet(key: string): Promise<string | null> {
  if (!kvEnabled()) return null;
  try {
    const res = await fetch(`${base}/get/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { result?: string | null };
    return data.result ?? null;
  } catch {
    return null;
  }
}

export async function kvSet(key: string, value: string): Promise<void> {
  if (!kvEnabled()) return;
  try {
    await fetch(`${base}/set/${encodeURIComponent(key)}/${encodeURIComponent(value)}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
  } catch {
    // melhor-esforço
  }
}
