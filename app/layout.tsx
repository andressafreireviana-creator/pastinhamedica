import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const libre = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

// Ajuste para o domínio final de produção (ou defina NEXT_PUBLIC_SITE_URL).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pastinhamedica.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pastinha Médica — Currículo para residência médica | Andressa Freire Viana",
    template: "%s · Pastinha Médica",
  },
  description:
    "Organização curricular e documental para candidatos à residência médica. Currículo Mestre, versões por banca (USP, UNICAMP, UNIFESP), checklist e calendário de editais — montados com clareza e padrão profissional.",
  applicationName: "Pastinha Médica",
  authors: [{ name: "Andressa Freire Viana" }],
  creator: "Andressa Freire Viana",
  publisher: "Andressa Freire Viana",
  category: "education",
  keywords: [
    "currículo residência médica",
    "pastinha médica",
    "análise curricular médica",
    "currículo Lattes residência",
    "organização documental residência",
    "currículo USP UNICAMP UNIFESP",
    "prova de títulos residência médica",
  ],
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Pastinha Médica",
    title: "Pastinha Médica — Currículo para residência médica",
    description:
      "Sua trajetória acadêmica apresentada da forma correta. Organização curricular e documental para candidatos à residência médica.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pastinha Médica — Currículo para residência médica",
    description:
      "Organização curricular e documental para candidatos à residência médica.",
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
  themeColor: "#F5F0EA",
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
      priceRange: "R$350–R$850",
      founder: { "@type": "Person", name: "Andressa Freire Viana" },
      provider: { "@type": "Person", name: "Andressa Freire Viana" },
      makesOffer: [
        {
          "@type": "Offer",
          name: "Plano Essencial",
          price: "350.00",
          priceCurrency: "BRL",
          category: "Organização curricular",
        },
        {
          "@type": "Offer",
          name: "Plano Avançado",
          price: "550.00",
          priceCurrency: "BRL",
          category: "Organização curricular",
        },
        {
          "@type": "Offer",
          name: "Plano Premium",
          price: "850.00",
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
          a: "Sim. Com a versão editável e a organização documental entregue, novas atualizações tornam-se simples — basta acrescentar os novos comprovantes à estrutura já montada.",
        },
      ].map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
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
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} ${libre.variable}`}
    >
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
