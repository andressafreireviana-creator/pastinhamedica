import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { referralPromo } from "./promo";

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
    default: "Currículo para residência médica: nós montamos o seu | Pastinha Médica",
    template: "%s · Pastinha Médica",
  },
  description:
    "Currículo médico e organização de documentos para médicos. Plano Pastinha para quem está se inscrevendo nos editais de residência médica: diagnóstico curricular, currículo no formato da banca e pasta com os documentos que pontuam. Combo Currículo Mestre para organizar a trajetória profissional: Currículo Vitae, Lattes e pasta digital. 10% de desconto por indicação em outubro, novembro e dezembro. Acompanhe os editais de residência médica 2027 (USP, UNICAMP, UNIFESP, UNESP, Einstein, Sírio-Libanês e mais).",
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
    "editais de residência médica 2027",
    "organização de documentos médicos",
    "organização de documentos para residência médica",
    "pasta de documentos residência médica",
    "documentos que pontuam no barema",
    "diagnóstico curricular residência médica",
    "currículo no formato da banca",
    "currículo vitae médico",
    "currículo Lattes médico",
    "atualizar currículo Lattes",
    "organizar trajetória profissional médico",
    "currículo profissional para médicos",
    "pasta digital de documentos médicos",
    "plano pastinha",
    "combo currículo mestre",
    "inscrições residência médica",
    "datas de prova residência médica",
    "previsão de editais residência médica",
    "análise curricular médica",
    "currículo USP UNICAMP UNIFESP UNESP",
    "prova de títulos residência médica",
    "pastinha médica",
    "pastinha médica desconto",
    "desconto por indicação currículo médico",
    "cupom de desconto currículo residência médica",
  ],
  alternates: { canonical: "/" },
  verification: { google: "qMbxf7niIvkBKGg3Kn4DL9iAqD6Ze38tO71GqDQoqAo" },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Pastinha Médica",
    title: "Currículo médico e editais de residência | Pastinha Médica",
    description:
      "10% de desconto em outubro, novembro e dezembro para quem indica e para quem é indicado. Currículo médico e organização da pasta de documentos conforme o edital. Acompanhe inscrições, datas e previsões dos editais de residência médica.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Currículo médico e editais de residência | Pastinha Médica",
    description:
      "10% de desconto (out–dez) para quem indica e para quem é indicado. Currículo médico e pasta de documentos no padrão do edital. Inscrições, datas e previsões dos editais de residência médica.",
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
      description: `Organização curricular e documental para candidatos à residência médica. ${referralPromo.resumo}`,
      url: siteUrl,
      email: "andressafreireviana@gmail.com",
      telephone: "+55-14-99145-7503",
      areaServed: "BR",
      inLanguage: "pt-BR",
      priceRange: "R$370 a R$420",
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
          name: "Plano Pastinha",
          description:
            "Para médicos que estão se inscrevendo em editais de residência médica: diagnóstico curricular, currículo voltado para a banca e pastinha com os documentos que pontuam. Atende apenas 1 banca. Cada banca adicional: + R$ 120,00.",
          price: "420.00",
          priceCurrency: "BRL",
          category: "Organização curricular",
          itemOffered: {
            "@type": "Service",
            name: "Plano Pastinha",
            serviceType: "Currículo para residência médica e organização de documentos conforme o edital",
            audience: {
              "@type": "Audience",
              audienceType: "Médicos inscritos em editais de residência médica",
            },
          },
        },
        {
          "@type": "Offer",
          name: "Combo Currículo Mestre",
          description:
            "Para médicos que precisam organizar a trajetória profissional: Currículo Vitae completo, Currículo Lattes criado ou atualizado e pasta digital com os documentos classificados, padronizados e renomeados.",
          price: "370.00",
          priceCurrency: "BRL",
          category: "Organização curricular",
          itemOffered: {
            "@type": "Service",
            name: "Combo Currículo Mestre",
            serviceType: "Currículo médico, Currículo Lattes e organização de documentos profissionais",
            audience: {
              "@type": "Audience",
              audienceType: "Médicos que precisam organizar a trajetória profissional",
            },
          },
        },
        {
          "@type": "Offer",
          name: "Banca adicional",
          description: "Adaptação do currículo para mais uma banca, em qualquer plano. Valor por banca adicional.",
          price: "120.00",
          priceCurrency: "BRL",
          category: "Organização curricular",
        },
        {
          "@type": "Offer",
          "@id": `${siteUrl}#indicacao`,
          name: `Desconto por indicação: ${referralPromo.titulo}`,
          description: `${referralPromo.resumo} ${referralPromo.comoUsar}`,
          url: `${siteUrl}/#indicacao`,
          category: "Desconto por indicação",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "BRL",
            description: `${referralPromo.percent}% de desconto sobre o valor do plano`,
          },
          validFrom: referralPromo.validFrom,
          validThrough: referralPromo.validThrough,
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
