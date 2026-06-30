// Fonte única dos editais — usada na página e no monitor de mudanças.
// Preencha `inscricao`, `prova` e `status` conforme os editais oficiais.
// `url` é o link oficial: aparece o botão "Ver edital" no card e a página
// passa a ser monitorada pelo aviso automático (app/api/check-editais).

export type Edital = {
  n: string; // nome da banca/instituição
  t: string; // tag "Pública · SP" | "Premium · RS"
  inscricao?: string; // ex.: "Prevista para setembro/2026"
  prova?: string; // ex.: "Novembro/2026"
  status?: "Inscrição em breve" | "Inscrições abertas" | "Encerrado" | "A confirmar";
  url?: string; // link oficial do edital/processo seletivo
};

export const editais: Edital[] = [
  { n: "PSU-MG (AREMG)", t: "Pública · MG", url: "https://www.aremg.org.br/processos-atuais" },
  { n: "USP-SP", t: "Pública · SP", url: "https://fm.usp.br/coreme/residencia/processo-seletivo" },
  { n: "USP-RP", t: "Pública · SP", url: "https://site.hcrp.usp.br/residenciamedica/" },
  { n: "UNICAMP", t: "Pública · SP", url: "https://portal.fcm.unicamp.br/residencias-em-saude/residencia-medica" },
  { n: "UNIFESP", t: "Pública · SP", url: "https://site.unifesp.br/coreme/processo-seletivo" },
  { n: "UNESP", t: "Pública · SP", url: "https://www.fmb.unesp.br" },
  { n: "Einstein", t: "Premium · SP", url: "https://www.einstein.br/ensino" },
  { n: "Sírio-Libanês", t: "Premium · SP", url: "https://www.faculdadesiriolibanes.org.br/fsl/residencia" },
  { n: "HCPA", t: "Pública · RS", url: "https://www.hcpa.edu.br/ensino/ensino-residencia/residencia-medica/residencia-medica-processo-seletivo" },
  { n: "HC-UFPR", t: "Pública · PR", url: "https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-sul/chc-ufpr/ensino-e-pesquisa" },
  { n: "HC-UFMG", t: "Pública · MG", url: "https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-sudeste/hc-ufmg/ensino-e-pesquisa/residencia-medica/processo-seletivo" },
  { n: "FAMERP", t: "Pública · SP", url: "https://www.famerp.br/index.php/diretoria-de-pos-graduacao/coreme/" },
  { n: "Beneficência Portuguesa (BP)", t: "Premium · SP", url: "https://educacaoepesquisa.bp.org.br/residencia/" },
  { n: "Hospital Moinhos de Vento", t: "Premium · RS", url: "https://www.hospitalmoinhos.org.br" },
];
