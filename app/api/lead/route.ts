// Endpoint de captura de lead do checklist.
// Recebe { nome, email, telefone } do formulário e ENVIA AUTOMATICAMENTE
// para o e-mail da Andressa — sem depender de a pessoa enviar o WhatsApp.
//
// Configuração (defina UMA das opções nas variáveis de ambiente do deploy):
//
//  A) Web3Forms (mais simples, gratuito):
//     1. Acesse https://web3forms.com e gere uma "Access Key" com o seu e-mail.
//     2. Defina:  WEB3FORMS_ACCESS_KEY = a_sua_chave
//     Pronto: cada lead chega no e-mail cadastrado na Web3Forms.
//
//  B) Resend (mais "próprio"):
//     1. Crie conta em https://resend.com e gere uma API Key.
//     2. Defina:  RESEND_API_KEY = re_xxx   e   LEAD_TO_EMAIL = seu@email.com
//     (sem domínio verificado, o Resend envia do onboarding@resend.dev
//      apenas para o e-mail dono da conta — que é o seu caso.)

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Lead = { nome?: string; email?: string; telefone?: string };

function validate({ nome, email, telefone }: Lead) {
  if (!nome || nome.trim().length < 2) return "Nome inválido.";
  if (!email || !emailRe.test(email.trim())) return "E-mail inválido.";
  if (!telefone || telefone.replace(/\D/g, "").length < 10) return "Telefone inválido.";
  return null;
}

async function sendViaResend(lead: Required<Lead>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  if (!apiKey || !to) return false;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL ?? "Pastinha Médica <onboarding@resend.dev>",
      to: [to],
      reply_to: lead.email,
      subject: "Novo lead — Checklist Pastinha Médica",
      html: `<h2>Novo lead pelo checklist</h2>
        <p><b>Nome:</b> ${escapeHtml(lead.nome)}</p>
        <p><b>E-mail:</b> ${escapeHtml(lead.email)}</p>
        <p><b>Telefone:</b> ${escapeHtml(lead.telefone)}</p>
        <p><b>Origem:</b> Download do checklist no site</p>`,
    }),
  });
  return res.ok;
}

async function sendViaWeb3Forms(lead: Required<Lead>) {
  const key = process.env.WEB3FORMS_ACCESS_KEY;
  if (!key) return false;

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      subject: "Novo lead — Checklist Pastinha Médica",
      from_name: "Pastinha Médica (site)",
      Nome: lead.nome,
      "E-mail": lead.email,
      Telefone: lead.telefone,
      Origem: "Download do checklist no site",
    }),
  });
  const data = (await res.json().catch(() => ({}))) as { success?: boolean };
  return res.ok && data.success === true;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

export async function POST(request: Request) {
  let body: Lead;
  try {
    body = (await request.json()) as Lead;
  } catch {
    return Response.json({ ok: false, error: "Corpo inválido." }, { status: 400 });
  }

  const error = validate(body);
  if (error) return Response.json({ ok: false, error }, { status: 400 });

  const lead = {
    nome: body.nome!.trim(),
    email: body.email!.trim(),
    telefone: body.telefone!.trim(),
  };

  try {
    // Tenta Resend primeiro; se não configurado, tenta Web3Forms.
    const sent = (await sendViaResend(lead)) || (await sendViaWeb3Forms(lead));
    if (!sent) {
      // Não configurado (sem chaves) ou provedor falhou.
      console.warn("[lead] e-mail não enviado — verifique WEB3FORMS_ACCESS_KEY ou RESEND_API_KEY.");
      return Response.json({ ok: false, error: "unconfigured" }, { status: 200 });
    }
    return Response.json({ ok: true });
  } catch (e) {
    console.error("[lead] erro ao enviar:", e);
    return Response.json({ ok: false, error: "send_failed" }, { status: 200 });
  }
}
