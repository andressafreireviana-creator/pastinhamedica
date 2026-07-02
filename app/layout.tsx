import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { editais } from "./editais-data";
import "./globals.css";

// Brand kit: uma só família (Inter). A hierarquia vem do peso, nunca de uma
// segunda fonte. As variáveis --font-cormorant/--font-libre são mapeadas para
// Inter em globals.css para preservar referências existentes.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Ajuste para o domínio final de produção (ou defina NEXT_PUBLIC_SITE_URL).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pastinhamedica.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pastinha Médica · Currículo para residência médica | Andressa Freire Viana",
    template: "%s · Pastinha Médica",
  },
  description:
    "Currículo médico e organização da pasta de documentos conforme o edital, para a residência médica. Acompanhe inscrições, datas de prova e previsões dos editais (USP, UNICAMP, UNIFESP, UNESP, Einstein, Sírio-Libanês e mais) e monte sua pasta no padrão de cada banca.",
  applicationName: "Pastinha Médica",
  authors: [{ name: "Andressa Freire Viana" }],
  creator: "Andressa Freire Viana",
  publisher: "Andressa Freire Viana",
  category: "education",
  keywords: [
    "currículo médico",
    "currículo para residência médica",
    "organização de pasta conforme edital",
    "organização documental residência médica",
    "editais de residência médica 2026",
    "inscrições residência médica",
    "datas de prova residência médica",
    "previsão de editais residência médica",
    "análise curricular médica",
    "currículo Lattes residência",
    "currículo USP UNICAMP UNIFESP UNESP",
    "prova de títulos residência médica",
    "pastinha médica",
  ],
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Pastinha Médica",
    title: "Currículo médico e editais de residência | Pastinha Médica",
    description:
      "Currículo médico e organização da pasta de documentos conforme o edital. Acompanhe inscrições, datas e previsões dos editais de residência médica.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Currículo médico e editais de residência | Pastinha Médica",
    description:
      "Currículo médico e pasta de documentos no padrão do edital. Inscrições, datas e previsões dos editais de residência médica.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2F5D62",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}#business`,
      name: "Pastinha Médica",
      description:
        "Organização curricular e documental para candidatos à residência médica.",
      url: siteUrl,
      email: "andressafreireviana@gmail.com",
      telephone: "+55-14-99145-7503",
      areaServed: "BR",
      inLanguage: "pt-BR",
      priceRange: "R$250 a R$750",
      serviceType:
        "Organização de currículo médico e da pasta de documentos para residência médica, conforme o edital",
      slogan: "Sua trajetória acadêmica apresentada da forma correta.",
      knowsAbout: [
        "Editais de residência médica",
        "Inscrições e datas de prova da residência médica",
        "Currículo médico",
        "Organização da pasta de documentos conforme o edital",
        "Análise curricular médica",
      ],
      founder: { "@type": "Person", name: "Andressa Freire Viana" },
      provider: { "@type": "Person", name: "Andressa Freire Viana" },
      makesOffer: [
        {
          "@type": "Offer",
          name: "Plano Essencial",
          price: "250.00",
          priceCurrency: "BRL",
          category: "Organização curricular",
        },
        {
          "@type": "Offer",
          name: "Plano Avançado",
          price: "450.00",
          priceCurrency: "BRL",
          category: "Organização curricular",
        },
        {
          "@type": "Offer",
          name: "Plano Premium",
          price: "750.00",
          priceCurrency: "BRL",
          category: "Organização curricular",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}#faq`,
      mainEntity: [
        {
          q: "Quais documentos preciso enviar?",
          a: "Certificados de cursos, monitorias, ligas, pesquisa, extensão, publicações, premiações e demais comprovantes acadêmicos. Logo no início do trabalho, você recebe um checklist para reunir tudo com tranquilidade.",
        },
        {
          q: "Posso escolher qualquer banca?",
          a: "Sim. O currículo é estruturado conforme os critérios da banca ou instituição que você indicar. Também é possível preparar versões para mais de um processo seletivo.",
        },
        {
          q: "Recebo versão editável?",
          a: "Sim. Além do PDF final, você recebe uma versão editável, para que possa atualizar o material em inscrições futuras.",
        },
        {
          q: "Qual o prazo de entrega?",
          a: "O prazo é combinado no início, conforme o volume de documentos e o plano escolhido. Você acompanha cada etapa até a entrega da pasta completa.",
        },
        {
          q: "O currículo garante aprovação?",
          a: "Não. O currículo não garante aprovação. O trabalho tem como objetivo organizar e estruturar suas informações de forma clara, profissional e adequada aos critérios documentais de cada processo seletivo.",
        },
        {
          q: "Posso atualizar meu currículo futuramente?",
          a: "Sim. Com a versão editável e a organização documental entregue, novas atualizações tornam-se simples: basta acrescentar os novos comprovantes à estrutura já montada.",
        },
        {
          q: "Quando abrem as inscrições da residência médica?",
          a: "As datas variam a cada ano e por banca. USP, UNICAMP e UNIFESP costumam abrir as inscrições entre setembro e outubro, com provas entre novembro e dezembro. No mapa de editais do site você acompanha a previsão de inscrição, a data de prova e o link oficial de cada banca.",
        },
        {
          q: "Quais editais de residência médica vocês acompanham?",
          a: "Acompanhamos os principais editais: PSU-MG (AREMG), USP-SP, USP-RP, UNICAMP, UNIFESP, UNESP, Einstein, Sírio-Libanês, HCPA, HC-UFPR, HC-UFMG, FAMERP, Beneficência Portuguesa e Hospital Moinhos de Vento, com a pasta de documentos montada conforme cada edital.",
        },
      ].map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}#editais`,
      name: "Editais de residência médica acompanhados",
      description:
        "Principais editais de residência médica com previsão de inscrições, datas de prova e envio documental.",
      itemListElement: editais.map((e, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: e.n,
        url: e.url,
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
