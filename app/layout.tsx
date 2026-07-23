import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
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
    "Como montar o currículo médico para a residência: elaboramos o currículo no formato exigido pela banca e organizamos sua pasta de documentos e certificações conforme o edital. Saiba o que colocar no currículo, os formatos exigidos pela banca e como renomear seus arquivos. Acompanhe inscrições, datas de prova e previsões dos editais (USP, UNICAMP, UNIFESP, UNESP, Einstein, Sírio-Libanês e mais).",
  applicationName: "Pastinha Médica",
  authors: [{ name: "Andressa Freire Viana" }],
  creator: "Andressa Freire Viana",
  publisher: "Andressa Freire Viana",
  category: "education",
  keywords: [
    "currículo médico",
    "currículo para residência médica",
    "como montar meu currículo médico",
    "o que colocar no currículo médico",
    "formatos de currículo exigidos pela banca",
    "como organizar pasta de documentos médicos",
    "como organizar certificações médicas",
    "como renomear arquivos de medicina",
    "organização de pasta conforme edital",
    "organização documental residência médica",
    "editais de residência médica 2026",
    "inscrições residência médica",
    "datas de prova residência médica",
    "previsão de editais residência médica",
    "análise curricular médica",
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
