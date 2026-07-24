import type { Metadata } from "next";
import Link from "next/link";
import { LandingInteractions } from "../landing-interactions";
import { SiteHeader, SiteFooter, WaFloat, whatsappHref, waIcon } from "../chrome";
import { EditaisCta } from "../editais-view";
import { faqItems } from "../faq-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pastinhamedica.com.br";
const pageUrl = `${siteUrl}/curriculo-para-residencia-medica`;

export const metadata: Metadata = {
  title: "Currículo para residência médica: nós montamos o seu no padrão da banca",
  description:
    "Serviço que monta o seu currículo para residência médica e organiza a pasta de documentos conforme o edital. Análise curricular, o que pontua, formato de cada banca e como enviar. Para estudantes de Medicina, internos e recém-formados.",
  alternates: { canonical: "/curriculo-para-residencia-medica" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    siteName: "Pastinha Médica",
    title: "Currículo para residência médica: nós montamos o seu",
    description:
      "Elaboramos o currículo no formato exigido pela banca e organizamos a sua pasta de documentos. Serviço operacional para a análise curricular da residência médica.",
  },
};

const check = (
  <svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2" /></svg>
);

// FAQ focado nesta página (subconjunto do FAQ geral).
const pageFaqIds = ["faq-como-montar", "faq-formatos-banca", "faq-o-que-colocar", "faq-organizar-pasta"];
const pageFaq = pageFaqIds
  .map((id) => faqItems.find((f) => f.id === id))
  .filter((f): f is NonNullable<typeof f> => Boolean(f));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Elaboração de currículo para residência médica",
      serviceType: "Elaboração de currículo médico e organização da pasta de documentos conforme o edital",
      description:
        "Serviço operacional que elabora o currículo para residência médica no formato exigido pela banca e organiza a pasta de documentos e certificações conforme o edital.",
      areaServed: "BR",
      provider: { "@type": "Person", name: "Andressa Freire Viana" },
      url: pageUrl,
      audience: {
        "@type": "Audience",
        audienceType:
          "Estudantes de Medicina, internos e recém-formados que prestam provas de residência médica com análise curricular",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: pageFaq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Currículo para residência médica", item: pageUrl },
      ],
    },
  ],
};

export default function CurriculoResidencia() {
  return (
    <div id="top">
      <LandingInteractions />
      <SiteHeader base="/" />

      <main id="conteudo">
        {/* Hero */}
        <section className="hero hero--offer" aria-label="Currículo para residência médica">
          <div className="container">
            <div className="hero-offer reveal">
              <p className="eyebrow hero-eyebrow"><span className="rule"></span>Currículo para residência médica</p>
              <h1 className="hero-name">Currículo para residência médica: nós montamos o seu no padrão da banca.</h1>
              <p className="hero-sub">A análise curricular pode definir a sua classificação. Você envia a documentação e nós organizamos a pasta e elaboramos o currículo no formato exigido pelo edital. Serviço operacional para estudantes de Medicina, internos e recém-formados.</p>
              <div className="hero-actions">
                <a className="btn btn-hook btn-lg" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                  {waIcon}
                  Quero organizar meu currículo
                </a>
                <Link className="btn btn-line" href="/#planos">Ver planos</Link>
              </div>
            </div>
          </div>
        </section>

        {/* O que é a análise curricular */}
        <section className="section section--white" aria-label="Análise curricular na residência médica">
          <div className="container">
            <div className="section-head reveal">
              <h2>O que é a análise curricular</h2>
              <p className="lead">Em muitos processos seletivos de residência médica, a segunda fase avalia o currículo. A banca pontua as suas atividades acadêmicas conforme um barema, e essa nota entra na classificação final.</p>
              <p className="body-note context-note">Por isso o formato importa tanto quanto o conteúdo: cada comprovante precisa entrar na pasta no padrão que o edital exige, para não perder ponto por documentação fora do formato.</p>
            </div>
          </div>
        </section>

        {/* O que pontua no currículo */}
        <section className="section section--tint" aria-label="O que pontua no currículo">
          <div className="container">
            <div className="section-head reveal">
              <h2>O que pontua no currículo</h2>
              <p className="lead">Os itens variam por banca, mas costumam compor a pontuação da análise curricular:</p>
            </div>
            <div className="grid-3 reveal">
              <div className="card"><svg className="ico" viewBox="0 0 24 24"><path d="M9.5 3h5M10.5 3v6.2L5.7 17a1.8 1.8 0 0 0 1.6 2.7h9.4a1.8 1.8 0 0 0 1.6-2.7l-4.8-7.8V3"/><path d="M7.7 14h8.6"/></svg><h3>Pesquisa e iniciação científica</h3><p>Projetos, iniciação científica e produção acadêmica ao longo da graduação.</p></div>
              <div className="card"><svg className="ico" viewBox="0 0 24 24"><path d="M3 9l9-3.6L21 9l-9 3.6L3 9z"/><path d="M7 10.7V15c0 1.1 2.2 2.4 5 2.4s5-1.3 5-2.4v-4.3"/></svg><h3>Monitorias</h3><p>Monitorias em disciplinas, com carga horária e período registrados.</p></div>
              <div className="card"><svg className="ico" viewBox="0 0 24 24"><circle cx="9" cy="8" r="2.4"/><circle cx="16" cy="9.2" r="2"/><path d="M4.5 18c0-2.6 2-4.4 4.5-4.4s4.5 1.8 4.5 4.4"/></svg><h3>Ligas acadêmicas</h3><p>Participação, diretoria e atividades organizadas nas ligas.</p></div>
              <div className="card"><svg className="ico" viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="18" cy="18" r="2.2"/><path d="M8 11l8-3.6M8 13l8 3.6"/></svg><h3>Extensão</h3><p>Projetos de extensão universitária e ações junto à comunidade.</p></div>
              <div className="card"><svg className="ico" viewBox="0 0 24 24"><path d="M12 6.2C10 4.9 7.4 4.2 4.8 4.2v13c2.6 0 5.2.7 7.2 2 2-1.3 4.6-2 7.2-2v-13C16.6 4.2 14 4.9 12 6.2z"/><path d="M12 6.2v13"/></svg><h3>Publicações</h3><p>Artigos, resumos e capítulos, com a referência padronizada.</p></div>
              <div className="card"><svg className="ico" viewBox="0 0 24 24"><circle cx="12" cy="14.5" r="4.3"/><path d="M9.2 10.8 7 3.5M14.8 10.8 17 3.5M9 4.2l3 2 3-2"/></svg><h3>Premiações e cursos</h3><p>Prêmios, menções, cursos e eventos com certificação.</p></div>
            </div>
          </div>
        </section>

        {/* Como montamos */}
        <section className="section section--white" aria-label="Como montamos o seu currículo">
          <div className="container">
            <div className="section-head reveal">
              <h2>Como montamos o seu currículo</h2>
              <p className="lead">Um processo simples, do envio à entrega. Você acompanha cada etapa.</p>
            </div>
            <ul className="steps-list reveal">
              <li><span className="rb-check" aria-hidden="true">{check}</span><div><b>Envie seus documentos</b><span>Reúna os comprovantes com o nosso checklist e envie pelo WhatsApp.</span></div></li>
              <li><span className="rb-check" aria-hidden="true">{check}</span><div><b>Organizamos a pasta</b><span>Classificamos a documentação na ordem exigida pelo anexo do edital.</span></div></li>
              <li><span className="rb-check" aria-hidden="true">{check}</span><div><b>Elaboramos o currículo</b><span>No formato e nos critérios de pontuação da banca escolhida.</span></div></li>
              <li><span className="rb-check" aria-hidden="true">{check}</span><div><b>Você recebe tudo pronto</b><span>Em PDF e versão editável, pronto para a inscrição.</span></div></li>
            </ul>
          </div>
        </section>

        {/* Formato por banca */}
        <section className="section section--tint" aria-label="Formato por banca">
          <div className="container">
            <div className="section-head reveal">
              <h2>Cada banca tem o seu formato</h2>
              <p className="lead">USP, UNICAMP, UNIFESP, UNESP, Einstein, Sírio-Libanês e outras bancas têm baremas e regras próprias. Adaptamos o currículo ao edital de cada uma.</p>
            </div>
            <EditaisCta />
            <p className="plans-note reveal">Veja inscrições, datas de prova e o link oficial de cada banca em <Link href="/editais">Editais de residência médica</Link>.</p>
          </div>
        </section>

        {/* FAQ focado */}
        <section className="section" aria-label="Dúvidas sobre currículo para residência">
          <div className="container">
            <div className="section-head section-head--center reveal">
              <h2>Dúvidas sobre o currículo</h2>
            </div>
            <div className="faq reveal">
              {pageFaq.map((f) => (
                <div className="faq-item" key={f.id}>
                  <button className="faq-q" aria-expanded="false" aria-controls={f.id}>
                    {f.q}
                    <span className="faq-icon" aria-hidden="true"></span>
                  </button>
                  <div className="faq-a" id={f.id}><div className="faq-a-inner">{f.a}</div></div>
                </div>
              ))}
            </div>
            <p className="plans-note reveal">Tem outra dúvida? <Link href="/duvidas">Ver todas as dúvidas</Link>.</p>
          </div>
        </section>

        {/* CTA final */}
        <section className="section section--cool" id="contato" aria-label="Fale com a Pastinha Médica">
          <div className="container">
            <div className="editais-cta cta-final reveal">
              <div className="ec-txt">
                <b>Pronto para deixar seu currículo no padrão da banca?</b>
                <span>Envie sua documentação pelo WhatsApp e cuidamos de toda a organização para você.</span>
              </div>
              <a className="btn btn-hook btn-lg" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                {waIcon}
                Quero organizar meu currículo
              </a>
            </div>
            <p className="cal-note reveal"><Link href="/">← Voltar para a página inicial</Link></p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WaFloat />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
