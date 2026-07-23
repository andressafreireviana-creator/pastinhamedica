import type { Metadata } from "next";
import Link from "next/link";
import { LandingInteractions } from "../landing-interactions";
import { SiteHeader, SiteFooter, WaFloat } from "../chrome";
import { editais } from "../editais-data";
import { EditaisCta, EditaisList } from "../editais-view";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pastinhamedica.com.br";

export const metadata: Metadata = {
  title: "Editais de residência médica: inscrições, datas e previsões",
  description:
    "Mapa dos principais editais de residência médica (USP, UNICAMP, UNIFESP, UNESP, Einstein, Sírio-Libanês e outras bancas) com previsão de inscrições, datas de prova, status e o link oficial de cada banca.",
  alternates: { canonical: "/editais" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${siteUrl}/editais`,
    siteName: "Pastinha Médica",
    title: "Editais de residência médica: inscrições, datas e previsões",
    description:
      "Inscrições, datas de prova e link oficial dos principais editais de residência médica.",
  },
};

const editaisJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/editais#lista`,
  name: "Editais de residência médica acompanhados",
  description:
    "Principais editais de residência médica com previsão de inscrições, datas de prova e envio documental.",
  itemListElement: editais.map((e, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: e.n,
    url: e.url,
  })),
};

export default function Editais() {
  return (
    <div id="top">
      <LandingInteractions />
      <SiteHeader base="/" />

      <main id="conteudo">
        <section className="section" aria-label="Mapa dos editais">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow"><span className="rule"></span>Mapa dos editais</p>
              <h1>Editais de residência médica: inscrições, datas e previsões</h1>
              <p className="lead">Acompanhe inscrições, datas de prova e previsões dos principais editais (USP, UNICAMP, UNIFESP, UNESP, Einstein, Sírio-Libanês e outras bancas) e apresente seu currículo no padrão de cada uma.</p>
            </div>

            <EditaisCta />
            <EditaisList />

            <p className="cal-note reveal">Lista de referência das principais bancas e instituições. As datas oficiais variam a cada ano e confirmamos cada edital junto com você.</p>
            <p className="cal-note reveal"><Link href="/">← Voltar para a página inicial</Link></p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WaFloat />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(editaisJsonLd) }}
      />
    </div>
  );
}
