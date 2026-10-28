import type { Metadata } from "next";
import Link from "next/link";
import { LandingInteractions } from "../landing-interactions";
import { SiteHeader, SiteFooter, WaFloat } from "../chrome";
import { editais } from "../editais-data";
import { EditaisCta, EditaisList } from "../editais-view";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pastinhamedica.com.br";

// O status de cada edital é calculado pela data de hoje; regenera a página a
// cada hora para que "abertas"/"encerradas" acompanhem o calendário.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Editais de residência médica 2027: inscrições, datas de prova e links",
  description:
    "Editais de residência médica 2027 (USP, UNICAMP, UNIFESP, UNESP, FAMERP, PSU-MG, ENARE, Einstein, Sírio-Libanês e outras bancas): período de inscrição, data da prova, status e o link oficial de cada edital.",
  alternates: { canonical: "/editais" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${siteUrl}/editais`,
    siteName: "Pastinha Médica",
    title: "Editais de residência médica 2027: inscrições, datas de prova e links",
    description:
      "Inscrições, datas de prova e link oficial dos principais editais de residência médica 2027.",
  },
};

const editaisJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/editais#lista`,
  name: "Editais de residência médica 2027",
  description:
    "Principais editais de residência médica 2027 com período de inscrição, data da prova e link oficial.",
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
              <h1>Editais de residência médica 2027: inscrições, datas de prova e links</h1>
              <p className="lead">Acompanhe o período de inscrição, a data da prova e o edital oficial das principais bancas (USP, UNICAMP, UNIFESP, UNESP, FAMERP, PSU-MG, ENARE, Einstein, Sírio-Libanês e outras) e apresente seu currículo médico e sua pasta de documentos no padrão de cada uma.</p>
            </div>

            <EditaisCta />
            <EditaisList />

            <p className="cal-note reveal">Datas do processo seletivo para residência médica 2027, conforme os editais publicados (atualizado em outubro de 2026). Os editais podem ser retificados: confira sempre o link oficial de cada banca.</p>
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
