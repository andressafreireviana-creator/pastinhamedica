// Fonte única dos editais — usada na página e no monitor de mudanças.
// Datas no formato ISO (AAAA-MM-DD), conforme os editais oficiais do ciclo
// de residência médica 2027. O status ("em breve", "abertas", "encerradas")
// é calculado a partir das datas, então não precisa ser atualizado à mão.
// `url` é o link oficial: aparece o botão "Ver edital" no card e a página
// passa a ser monitorada pelo aviso automático (app/api/check-editais).

export type Edital = {
  n: string; // nome da banca/instituição
  t: string; // tag "Pública · SP" | "Premium · RS"
  inscricao?: { inicio: string; fim: string }; // ex.: { inicio: "2026-10-06", fim: "2026-10-28" }
  prova?: string; // data da prova objetiva, ex.: "2026-12-06"
  obs?: string; // detalhe curto: banca organizadora, prorrogação, seleção unificada
  url?: string; // link oficial do edital/processo seletivo
};

export type EditalStatus = "Inscrição em breve" | "Inscrições abertas" | "Inscrições encerradas" | "A confirmar";

export const editais: Edital[] = [
  {
    n: "USP-SP",
    t: "Pública · SP",
    inscricao: { inicio: "2026-10-06", fim: "2026-10-28" },
    prova: "2026-12-06",
    obs: "Inscrições pela Fuvest, prorrogadas até 28/10.",
    url: "https://www.fuvest.br/residencia-medica",
  },
  {
    n: "USP-RP",
    t: "Pública · SP",
    inscricao: { inicio: "2026-10-06", fim: "2026-10-26" },
    prova: "2026-11-20",
    obs: "Prova prática do acesso direto em 05/12.",
    url: "https://extranet.hcrp.usp.br/novorh/ListaArquivos.aspx?edital=3650&s=3",
  },
  {
    n: "UNICAMP",
    t: "Pública · SP",
    inscricao: { inicio: "2026-10-01", fim: "2026-10-15" },
    prova: "2026-11-15",
    obs: "Inscrições pela Comvest.",
    url: "https://portal.fcm.unicamp.br/residencias-em-saude/residencia-medica/processo-seletivo-2027/",
  },
  {
    n: "UNIFESP",
    t: "Pública · SP",
    inscricao: { inicio: "2026-10-07", fim: "2026-10-30" },
    prova: "2026-11-29",
    obs: "Inscrições pela Vunesp.",
    url: "https://site.unifesp.br/coreme/processo-seletivo/processo-seletivo-2027",
  },
  {
    n: "UNESP",
    t: "Pública · SP",
    inscricao: { inicio: "2026-10-20", fim: "2026-11-06" },
    prova: "2026-12-12",
    obs: "FMB Botucatu. Inscrições pela Vunesp.",
    url: "https://www.fmb.unesp.br",
  },
  {
    n: "FAMERP",
    t: "Pública · SP",
    inscricao: { inicio: "2026-09-21", fim: "2026-10-21" },
    prova: "2026-11-24",
    url: "https://www.famerp.br/index.php/diretoria-de-pos-graduacao/coreme/processo-seletivo-coreme-2027-acesso-direto-e-especialidades/",
  },
  {
    n: "PSU-MG (AREMG)",
    t: "Pública · MG",
    inscricao: { inicio: "2026-10-06", fim: "2026-10-19" },
    prova: "2026-11-22",
    obs: "Seleção unificada de Minas Gerais. Inscrições prorrogadas até 19/10.",
    url: "https://www.aremg.org.br/processos-atuais",
  },
  {
    n: "HC-UFMG",
    t: "Pública · MG",
    inscricao: { inicio: "2026-06-15", fim: "2026-07-05" },
    prova: "2026-09-13",
    obs: "Seleção pelo ENARE. O acesso direto usa a nota do Enamed.",
    url: "https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-sudeste/hc-ufmg/ensino-e-pesquisa/residencia-medica/processo-seletivo",
  },
  {
    n: "HC-UFPR",
    t: "Pública · PR",
    inscricao: { inicio: "2026-06-15", fim: "2026-07-05" },
    prova: "2026-09-13",
    obs: "Seleção pelo ENARE. O acesso direto usa a nota do Enamed.",
    url: "https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-sul/chc-ufpr/ensino-e-pesquisa",
  },
  {
    n: "HCPA",
    t: "Pública · RS",
    inscricao: { inicio: "2026-08-28", fim: "2026-09-29" },
    prova: "2026-10-31",
    obs: "Inscrições pela FundMed.",
    url: "https://fundmed.org.br/evento/residencia-medica-hcpa-2027/",
  },
  {
    n: "Einstein",
    t: "Premium · SP",
    inscricao: { inicio: "2026-08-19", fim: "2026-09-21" },
    prova: "2026-11-02",
    obs: "Inscrições pela Vunesp.",
    url: "https://ensino.einstein.br/residencia-medica",
  },
  {
    n: "Sírio-Libanês",
    t: "Premium · SP",
    inscricao: { inicio: "2026-06-01", fim: "2026-08-14" },
    prova: "2026-09-27",
    obs: "Inscrições pela Vunesp.",
    url: "https://www.faculdadesiriolibanes.org.br/fsl/residencia",
  },
  {
    n: "Beneficência Portuguesa (BP)",
    t: "Premium · SP",
    inscricao: { inicio: "2026-10-20", fim: "2026-11-05" },
    prova: "2026-12-13",
    obs: "Vagas pela seleção unificada SUS-SP (Vunesp).",
    url: "https://educacaoepesquisa.bp.org.br/residencia/",
  },
  {
    n: "Hospital Moinhos de Vento",
    t: "Premium · RS",
    inscricao: { inicio: "2026-09-04", fim: "2026-09-30" },
    prova: "2026-11-01",
    obs: "Inscrições pela FundMed. Prova única com a UFCSPA.",
    url: "https://fundmed.org.br/evento/residencia-medica-hmv-2027/",
  },
];

// "2026-10-06" -> "06/10/2026" (ou "06/10" sem o ano).
function brDate(iso: string, withYear = true) {
  const [y, m, d] = iso.split("-");
  return withYear ? `${d}/${m}/${y}` : `${d}/${m}`;
}

export function formatInscricao(e: Edital) {
  if (!e.inscricao) return "A confirmar";
  const { inicio, fim } = e.inscricao;
  const sameYear = inicio.slice(0, 4) === fim.slice(0, 4);
  return `${brDate(inicio, !sameYear)} a ${brDate(fim)}`;
}

export function formatProva(e: Edital) {
  return e.prova ? brDate(e.prova) : "A confirmar";
}

// Data de hoje no fuso de Brasília, no mesmo formato ISO das datas acima.
function todayIso() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo" }).format(new Date());
}

export function editalStatus(e: Edital, today = todayIso()): EditalStatus {
  if (!e.inscricao) return "A confirmar";
  if (today < e.inscricao.inicio) return "Inscrição em breve";
  if (today <= e.inscricao.fim) return "Inscrições abertas";
  return "Inscrições encerradas";
}
