export type FaqItem = {
  id: string;
  q: string;
  a: string;
  home?: boolean; // aparece também na home (resumida)
};

// Fonte única do FAQ: usada na página /duvidas (completa) e na home (resumo).
export const faqItems: FaqItem[] = [
  {
    id: "faq-o-que-faz",
    home: true,
    q: "O que exatamente a Pastinha Médica faz?",
    a: "Organizamos a sua documentação e elaboramos o seu currículo médico no formato exigido pelo edital da banca escolhida. Você envia os comprovantes e nós fazemos todo o trabalho técnico de organização e estruturação da pasta. Não é mentoria, curso ou consultoria: é a execução operacional do serviço.",
  },
  {
    id: "faq-como-montar",
    home: true,
    q: "Como montar meu currículo médico para a residência?",
    a: "Reúna seus comprovantes, identifique o que pontua no barema do edital e organize tudo no formato exigido pela banca. É exatamente esse trabalho que fazemos por você: você envia a documentação e recebe o currículo pronto, em PDF e versão editável.",
  },
  {
    id: "faq-formatos-banca",
    q: "Quais são os formatos de currículo exigidos pela banca?",
    a: "Cada banca define seu próprio barema e a ordem de apresentação dos documentos. Por isso o currículo é adaptado ao formato de cada edital (USP, UNICAMP, UNIFESP e outras), com a pontuação organizada conforme os critérios oficiais.",
  },
  {
    id: "faq-o-que-colocar",
    q: "O que precisa colocar no currículo médico?",
    a: "Formação, monitorias, ligas acadêmicas, pesquisa e iniciação científica, extensão, publicações, premiações e cursos. Cada item entra com a comprovação e a carga horária no padrão que a banca pede.",
  },
  {
    id: "faq-organizar-pasta",
    q: "Como organizar minha pasta de documentos e certificações médicas?",
    a: "Separe os documentos por categoria, siga a ordem do anexo do edital e mantenha uma árvore de pastas padronizada. Fazemos essa organização digital completa e você ainda recebe um checklist para reunir tudo com tranquilidade.",
  },
  {
    id: "faq-renomear-arquivos",
    q: "Como renomear meus arquivos de medicina?",
    a: "Use um padrão único de nomeação, como ANO_Tipo_Descrição (por exemplo, 2025_Monitoria_Fisiologia). Isso facilita a conferência da banca e evita retrabalho. Padronizamos todos os seus arquivos nesse formato.",
  },
  {
    id: "faq-documentos",
    q: "Quais documentos preciso enviar?",
    a: "Certificados de cursos, monitorias, ligas, pesquisa, extensão, publicações, premiações e demais comprovantes acadêmicos. Logo no início você recebe um checklist para reunir tudo com tranquilidade.",
  },
  {
    id: "faq-bancas",
    q: "Vocês atendem qualquer banca?",
    a: "Sim. O currículo é elaborado conforme os critérios da banca ou instituição que você indicar. Também é possível preparar versões para mais de um processo seletivo.",
  },
  {
    id: "faq-material",
    home: true,
    q: "Como recebo o material?",
    a: "Você recebe o currículo em PDF final e em versão editável, junto com a pasta organizada. Assim fica pronto para a inscrição e fácil de atualizar em processos futuros.",
  },
  {
    id: "faq-prazo",
    q: "Qual o prazo de entrega?",
    a: "O prazo é combinado no início, conforme o volume de documentos e o plano escolhido. Você acompanha cada etapa até a entrega da pasta completa.",
  },
  {
    id: "faq-aprovacao",
    home: true,
    q: "O currículo garante aprovação?",
    a: "Não. O currículo não garante aprovação. O objetivo é organizar e apresentar as suas informações de forma clara, profissional e adequada aos critérios documentais de cada processo seletivo.",
  },
  {
    id: "faq-inscricoes",
    home: true,
    q: "Quando abrem as inscrições da residência médica?",
    a: "As datas variam a cada ano e por banca. USP, UNICAMP e UNIFESP costumam abrir as inscrições entre setembro e outubro, com provas entre novembro e dezembro. No mapa de editais do site você acompanha a previsão de inscrição, a data de prova e o link oficial de cada banca.",
  },
  {
    id: "faq-editais-acompanhados",
    q: "Quais editais de residência médica vocês acompanham?",
    a: "Acompanhamos os principais editais: PSU-MG (AREMG), USP-SP, USP-RP, UNICAMP, UNIFESP, UNESP, Einstein, Sírio-Libanês, HCPA, HC-UFPR, HC-UFMG, FAMERP, Beneficência Portuguesa e Hospital Moinhos de Vento, com a pasta de documentos montada conforme cada edital.",
  },
];

export const homeFaqItems = faqItems.filter((f) => f.home);
