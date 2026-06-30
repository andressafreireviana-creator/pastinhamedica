// Envio de e-mail genérico, reutilizado pela captura de lead e pelo aviso de
// editais. Usa Resend (RESEND_API_KEY + LEAD_TO_EMAIL) ou Web3Forms
// (WEB3FORMS_ACCESS_KEY). Retorna true se algum provedor enviou.

type SendArgs = { subject: string; html: string; text?: string; replyTo?: string };

function stripHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function viaResend({ subject, html, text, replyTo }: SendArgs) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  if (!apiKey || !to) return false;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL ?? "Pastinha Médica <onboarding@resend.dev>",
      to: [to],
      subject,
      html,
      ...(text ? { text } : {}),
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  return res.ok;
}

async function viaWeb3Forms({ subject, html, text }: SendArgs) {
  const key = process.env.WEB3FORMS_ACCESS_KEY;
  if (!key) return false;
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      subject,
      from_name: "Pastinha Médica (site)",
      message: text ?? stripHtml(html),
    }),
  });
  const data = (await res.json().catch(() => ({}))) as { success?: boolean };
  return res.ok && data.success === true;
}

export async function sendEmail(args: SendArgs): Promise<boolean> {
  try {
    if (await viaResend(args)) return true;
    if (await viaWeb3Forms(args)) return true;
  } catch (e) {
    console.error("[email] falha ao enviar:", e);
  }
  return false;
}
