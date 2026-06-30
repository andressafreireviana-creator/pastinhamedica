# Como publicar o site (deploy)

Projeto **Next.js 16**. O caminho mais simples é a **Vercel** (criadora do Next),
com SSL automático, deploy a cada push e suporte nativo ao agendamento de cron.

## 1. Subir o código para produção
- Faça o merge do Pull Request para a branch **`main`** (a Vercel publica a `main`).

## 2. Importar na Vercel
1. Acesse https://vercel.com e entre com a conta do GitHub.
2. **Add New → Project** e selecione o repositório `pastinhamedica`.
3. Framework: **Next.js** (detectado automaticamente). Pode deixar tudo no padrão e clicar **Deploy**.

## 3. Variáveis de ambiente (Project → Settings → Environment Variables)
| Variável | Para quê | Obrigatória |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Domínio final (canonical, sitemap, robots, SEO) | Recomendada |
| `WEB3FORMS_ACCESS_KEY` | E-mail automático dos **leads do checklist** e do **aviso de editais**. Gere grátis em https://web3forms.com com o seu e-mail | Sim (para receber leads) |
| `CRON_SECRET` | Protege o endpoint do aviso de editais (a Vercel envia este token no cron) | Recomendada |
| `KV_REST_API_URL` / `KV_REST_API_TOKEN` | Memória do monitor de editais (para avisar **só quando mudar**). Crie um **Vercel KV** em Storage → Create Database; as variáveis são preenchidas sozinhas | Opcional |

> Alternativa ao Web3Forms: `RESEND_API_KEY` + `LEAD_TO_EMAIL` (Resend).

Depois de adicionar as variáveis, faça um **Redeploy**.

## 4. Conectar o domínio (Project → Settings → Domains)
1. Clique em **Add** e digite o seu domínio (ex.: `pastinhamedica.com.br`).
2. A Vercel mostra os registros de **DNS** a configurar no seu registrador (Registro.br, GoDaddy, etc.):
   - Domínio raiz: registro **A** apontando para o IP indicado pela Vercel.
   - `www`: registro **CNAME** apontando para `cname.vercel-dns.com`.
3. Após o DNS propagar (minutos a algumas horas), o SSL é emitido automaticamente.
4. Atualize `NEXT_PUBLIC_SITE_URL` para o domínio final e faça **Redeploy**.

## 5. Aviso semanal de editais (cron)
- Já está agendado em `vercel.json` (segunda-feira). Funciona automaticamente após o deploy.
- O "avisar só quando mudar" depende do **Vercel KV** (passo 3). Sem ele, o cron roda mas não compara.

## Pós-deploy (SEO)
- No **Google Search Console**, adicione o domínio e envie `https://SEU-DOMINIO/sitemap.xml`.
- O `robots.txt` e o `sitemap.xml` já são gerados automaticamente pelo projeto.
