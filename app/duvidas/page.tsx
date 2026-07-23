import type { Metadata } from "next";
import Link from "next/link";
import { LandingInteractions } from "../landing-interactions";
import { SiteHeader, SiteFooter, WaFloat, whatsappHref, waIcon } from "../chrome";
import { faqItems } from "../faq-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pastinhamedica.com.br";

export const metadata: Metadata = {
  title: "Dúvidas: como montar o currículo médico e organizar a pasta",
  description:
    "Respostas objetivas: como montar o currículo médico para a residência, os formatos exigidos pela banca, o que colocar no currículo, como organizar a pasta de documentos e certificações e como renomear os arquivos.",
  alternates: { canonical: "/duvidas" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: `${siteUrl}/duvidas`,
    siteName: "Pastinha Médica",
    title: "Dúvidas sobre currículo médico e pasta para residência",
    description:
      "Como montar o currículo médico, formatos exigidos pela banca, o que colocar, como organizar a pasta e renomear arquivos.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/duvidas#faq`,
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Duvidas() {
  return (
    <div id="top">
      <LandingInteractions />
      <SiteHeader base="/" />

      <main id="conteudo">
        <section className="section" aria-label="Perguntas frequentes">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow"><span className="rule"></span>Dúvidas frequentes</p>
              <h1>Como montar o currículo e organizar a pasta para a residência</h1>
              <p className="lead">Respostas objetivas sobre o currículo médico, o formato de cada banca e a organização da documentação. Se ainda ficar em dúvida, é só me chamar no WhatsApp.</p>
            </div>

            <div className="faq reveal">
              {faqItems.map((f) => (
                <div className="faq-item" key={f.id}>
                  <button className="faq-q" aria-expanded="false" aria-controls={f.id}>
                    {f.q}
                    <span className="faq-icon" aria-hidden="true"></span>
                  </button>
                  <div className="faq-a" id={f.id}>
                    <div className="faq-a-inner">{f.a}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="editais-cta cta-final reveal" style={{ marginTop: "clamp(32px,4vw,48px)" }}>
              <div className="ec-txt">
                <b>Prefere que a gente cuide de tudo?</b>
                <span>Envie sua documentação pelo WhatsApp e recebemos a pasta e o currículo prontos para você.</span>
              </div>
              <a className="btn btn-hook" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
}
