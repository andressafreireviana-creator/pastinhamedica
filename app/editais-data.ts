// Fonte única dos editais — usada na página e (futuramente) no monitor de mudanças.
// Preencha `inscricao`, `prova`, `status` e `url` conforme os editais oficiais.
// `url` é o link oficial: quando preenchido, aparece o botão "Ver edital" no card
// e a página passa a ser monitorada pelo aviso automático.

export type Edital = {
  n: string; // nome da banca/instituição
  t: string; // tag "Pública · SP" | "Premium · RS"
  inscricao?: string; // ex.: "Prevista para setembro/2026"
  prova?: string; // ex.: "Novembro/2026"
  status?: "Inscrição em breve" | "Inscrições abertas" | "Encerrado" | "A confirmar";
  url?: string; // link oficial do edital/processo seletivo
};

export const editais: Edital[] = [
  { n: "PSU-MG (AREMG)", t: "Pública · MG" },
  { n: "USP-SP", t: "Pública · SP" },
  { n: "USP-RP", t: "Pública · SP" },
  { n: "UNICAMP", t: "Pública · SP" },
  { n: "UNIFESP", t: "Pública · SP" },
  { n: "UNESP", t: "Pública · SP" },
  { n: "Einstein", t: "Premium · SP" },
  { n: "Sírio-Libanês", t: "Premium · SP" },
  { n: "HCPA", t: "Pública · RS" },
  { n: "HC-UFPR", t: "Pública · PR" },
  { n: "HC-UFMG", t: "Pública · MG" },
  { n: "FAMERP", t: "Pública · SP" },
  { n: "Beneficência Portuguesa (BP)", t: "Premium · SP" },
  { n: "Hospital Moinhos de Vento", t: "Premium · RS" },
];
