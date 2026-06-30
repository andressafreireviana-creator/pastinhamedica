import Image from "next/image";
import { LandingInteractions } from "./landing-interactions";
import { ChecklistForm } from "./checklist-form";
import { CvExampleModal } from "./cv-modal";

type PlanName = "Essencial" | "Avançado" | "Premium";

const phoneNumber = "5514991457503";

// Placeholder on-brand em public/andressa.jpg. Substitua pelo arquivo real
// (mesmo caminho) que a foto aparece automaticamente.
const andressaPhotoSrc = "/andressa.jpg";

const editais = [
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

function whatsappHref(plan?: PlanName) {
  const message = plan
    ? `Olá, Andressa. Tenho interesse no Plano ${plan} para organizar meu currículo para residência médica.`
    : "Olá, Andressa. Tenho interesse em organizar meu currículo para residência médica.";

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

function PortraitPlaceholder() {
  if (andressaPhotoSrc) {
    return (
      <div className="portrait portrait--image">
        <span className="tick t1"></span>
        <span className="tick t2"></span>
        <span className="tick t3"></span>
        <span className="tick t4"></span>
        <Image
          src={andressaPhotoSrc}
          alt="Foto profissional de Andressa Freire Viana"
          fill
          sizes="(max-width: 980px) 380px, 42vw"
          className="portrait-img"
        />
      </div>
    );
  }

  return (
    <div className="portrait">
      <span className="tick t1"></span>
      <span className="tick t2"></span>
      <span className="tick t3"></span>
      <span className="tick t4"></span>
      <svg className="ico-portrait" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="9" r="3.4" />
        <path d="M5.5 19.5c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      </svg>
      <span className="pcap">Foto profissional da Andressa</span>
      <span className="psub">Espaço reservado</span>
    </div>
  );
}

const check = (
  <svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2" /></svg>
);

export default function Home() {
  return (
    <div id="top">
      <LandingInteractions />
      <header className="site-header" id="siteHeader">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="Pastinha Médica, início">
            <span className="wordmark-ico" aria-hidden="true"><span></span><span></span></span>
            <span className="wordmark-text">
              <b>Pastinha&nbsp;Médica</b>
              <span className="wordmark-by">Por Andressa Freire Viana</span>
            </span>
          </a>
          <nav className="nav-links" aria-label="Navegação principal">
            <a href="#recebe">A pastinha</a>
            <a href="#checklist">Checklist</a>
            <a href="#editais">Editais</a>
            <a href="#planos">Planos</a>
            <a href="#institucional">Quem sou</a>
          </nav>
          <div className="header-cta">
            <a className="btn btn-primary btn-sm" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              <svg className="ico-wa" viewBox="0 0 24 24"><path d="M20 11.4a7.4 7.4 0 0 1-10.9 6.6L4 19.4l1.4-4.1A7.4 7.4 0 1 1 20 11.4z"/></svg>
              <span className="lbl">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main id="conteudo">

      <section className="hero hero--offer" aria-label="Apresentação">
        <div className="container">
          <div className="hero-offer reveal">
            <h1 className="hero-name">Sua trajetória acadêmica merece ser apresentada da forma correta.</h1>
            <p className="hero-sub">Organização curricular e documental para candidatos à residência médica.</p>

            <div className="alert" role="note">
              <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2 21 19H3z" /><path d="M12 10v4.2M12 17.2v.01" /></svg>
              <div>
                <span className="alert-label">Atenção · editais 2026</span>
                <p><b>As inscrições começam a chegar.</b> USP, UNICAMP e UNIFESP costumam abrir entre setembro e outubro. Pasta pronta antes do edital evita correria e perda de pontos por formato.</p>
              </div>
            </div>

            <div className="opbox">
              <div className="is">
                <div className="op-h">✓ É</div>
                <p>Montagem de currículos e organização operacional da pasta de documentos, na ordem do anexo do edital.</p>
              </div>
              <div className="isnot">
                <div className="op-h">✕ Não é</div>
                <p>Mentoria, coaching, curso ou promessa de aprovação. É execução, não motivação.</p>
              </div>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                <svg className="ico-wa" viewBox="0 0 24 24"><path d="M20 11.4a7.4 7.4 0 0 1-10.9 6.6L4 19.4l1.4-4.1A7.4 7.4 0 1 1 20 11.4z"/></svg>
                Fale comigo no WhatsApp
              </a>
              <a className="btn btn-line" href="#checklist">Baixar checklist de documentos</a>
            </div>

            <div className="hero-rule"></div>
            <div className="hero-foot">
              <div className="hero-banks">
                <span className="hb-label">Para as principais bancas e instituições</span>
                <p className="hb-list">UNICAMP, UNIFESP, USP-SP/RP, UFMG e muitas outras…</p>
              </div>
              <a className="btn btn-line" href="#editais">Consultar</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" id="contexto">
        <div className="container">
          <div className="section-head reveal">
            <h2>Por que o currículo importa?</h2>
            <p className="lead">Em muitos processos seletivos de residência médica, a análise curricular influencia diretamente a classificação final do candidato.</p>
            <p className="body-note context-note">Atividades acadêmicas, monitorias, pesquisa científica, extensão universitária e produção intelectual costumam compor parte da pontuação dos editais. Uma documentação organizada facilita a apresentação dessas atividades e reduz problemas durante o processo de inscrição.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="card">
              <svg className="ico" viewBox="0 0 24 24"><path d="M9.5 3h5M10.5 3v6.2L5.7 17a1.8 1.8 0 0 0 1.6 2.7h9.4a1.8 1.8 0 0 0 1.6-2.7l-4.8-7.8V3"/><path d="M7.7 14h8.6"/></svg>
              <h3>Pesquisa Científica</h3>
              <p>Iniciação científica, projetos e produção acadêmica desenvolvida ao longo da graduação.</p>
            </div>
            <div className="card">
              <svg className="ico" viewBox="0 0 24 24"><path d="M3 9l9-3.6L21 9l-9 3.6L3 9z"/><path d="M7 10.7V15c0 1.1 2.2 2.4 5 2.4s5-1.3 5-2.4v-4.3"/><path d="M21 9v4"/></svg>
              <h3>Monitorias</h3>
              <p>Atividades de monitoria em disciplinas, com registro adequado de carga horária e período.</p>
            </div>
            <div className="card">
              <svg className="ico" viewBox="0 0 24 24"><circle cx="9" cy="8" r="2.4"/><circle cx="16" cy="9.2" r="2"/><path d="M4.5 18c0-2.6 2-4.4 4.5-4.4s4.5 1.8 4.5 4.4"/><path d="M14.5 17.6c.1-2 1.5-3.3 3.4-3.3 1.4 0 2.6.8 3.1 2"/></svg>
              <h3>Ligas Acadêmicas</h3>
              <p>Participação, diretoria e atividades organizadas no âmbito das ligas acadêmicas.</p>
            </div>
            <div className="card">
              <svg className="ico" viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="18" cy="18" r="2.2"/><path d="M8 11l8-3.6M8 13l8 3.6"/></svg>
              <h3>Extensão</h3>
              <p>Projetos de extensão universitária e ações desenvolvidas junto à comunidade.</p>
            </div>
            <div className="card">
              <svg className="ico" viewBox="0 0 24 24"><path d="M12 6.2C10 4.9 7.4 4.2 4.8 4.2v13c2.6 0 5.2.7 7.2 2 2-1.3 4.6-2 7.2-2v-13C16.6 4.2 14 4.9 12 6.2z"/><path d="M12 6.2v13"/></svg>
              <h3>Publicações</h3>
              <p>Artigos, resumos e capítulos, com a referência apresentada de forma padronizada.</p>
            </div>
            <div className="card">
              <svg className="ico" viewBox="0 0 24 24"><circle cx="12" cy="14.5" r="4.3"/><path d="M9.2 10.8 7 3.5M14.8 10.8 17 3.5M9 4.2l3 2 3-2"/><path d="M12 12.7l.6 1.3 1.4.2-1 1 .25 1.4L12 16.2l-1.25.7.25-1.4-1-1 1.4-.2z"/></svg>
              <h3>Premiações</h3>
              <p>Prêmios, menções e reconhecimentos obtidos em eventos e atividades acadêmicas.</p>
            </div>
          </div>
          <div className="result-band reveal">
            <span className="rb-label">O que muda, na prática</span>
            <ul className="rb-list">
              <li><span className="rb-check" aria-hidden="true">{check}</span>Documentação reunida e fácil de localizar</li>
              <li><span className="rb-check" aria-hidden="true">{check}</span>Menos risco de glosa por formato</li>
              <li><span className="rb-check" aria-hidden="true">{check}</span>Apresentação clara e padronizada para a banca</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="dificuldades">
        <div className="container">
          <div className="section-head reveal">
            <h2>O que costuma gerar dificuldade?</h2>
            <p className="lead">Pontos recorrentes que tornam a organização do currículo mais trabalhosa do que precisaria ser.</p>
          </div>
          <div className="grid-2 reveal">
            <div className="diff">
              <svg className="ico" viewBox="0 0 24 24"><rect x="3.5" y="6.5" width="9.5" height="12.5" rx="1.3" transform="rotate(-9 8.25 12.75)"/><rect x="9.5" y="5" width="9.5" height="12.5" rx="1.3" transform="rotate(8 14.25 11.25)"/></svg>
              <div><h3>Certificados espalhados</h3><p>Comprovantes em e-mails, pastas e aplicativos diferentes, difíceis de reunir na hora da inscrição.</p></div>
            </div>
            <div className="diff">
              <svg className="ico" viewBox="0 0 24 24"><path d="M7 3.5h6.5L18 8v12.5H7z"/><path d="M13.5 3.5V8H18"/><path d="M9.5 12h7M9.5 15h7M9.5 18h3.5" strokeDasharray="2.2 2.2"/></svg>
              <div><h3>Documentação incompleta</h3><p>Atividades sem o certificado correspondente ou com dados que faltam para a comprovação.</p></div>
            </div>
            <div className="diff">
              <svg className="ico" viewBox="0 0 24 24"><path d="M3.5 7h3.2l9 10h3.3M3.5 17h3.2l3-3.3M16 7h3.7M18 5l2 2-2 2M18 15l2 2-2 2"/></svg>
              <div><h3>Falta de organização</h3><p>Material sem um padrão claro, o que dificulta a leitura e a conferência dos documentos.</p></div>
            </div>
            <div className="diff">
              <svg className="ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.3"/><path d="M12 7v5.2l3.4 2.1"/></svg>
              <div><h3>Pouco tempo para estruturar o currículo</h3><p>A rotina de estudos e plantões deixa pouco espaço para organizar documentos com calma.</p></div>
            </div>
            <div className="diff">
              <svg className="ico" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="m19.5 19.5-3.9-3.9"/><path d="M8.6 11l1.7 1.7 3-3.3"/></svg>
              <div><h3>Dificuldade para identificar o que pontua</h3><p>Dúvidas sobre quais atividades são consideradas e como cada uma é avaliada pela banca.</p></div>
            </div>
            <div className="diff">
              <svg className="ico" viewBox="0 0 24 24"><path d="M7 4.5v5.3a3.5 3.5 0 0 0 3.5 3.5H17M7 19.5v-6.2M14.5 10.5 17.5 13.5l-3 3"/><circle cx="7" cy="4.5" r="1.5"/><circle cx="7" cy="19.5" r="1.5"/></svg>
              <div><h3>Diferenças entre as bancas</h3><p>Cada processo seletivo adota critérios próprios de pontuação e de apresentação curricular.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" id="ajuda">
        <div className="container">
          <div className="section-head reveal">
            <h2>Como posso ajudar</h2>
            <p className="lead">Um percurso simples, do envio dos seus documentos à entrega da pasta completa.</p>
          </div>
          <div className="timeline reveal">
            <div className="tl-item">
              <div className="tl-marker"><div className="tl-num">1</div><div className="tl-line"></div></div>
              <div className="tl-body"><h3>Você envia seus documentos</h3><p>Você reúne seus comprovantes com o apoio de um checklist. Eu recebo todo o material e dou início à organização.</p></div>
            </div>
            <div className="tl-item">
              <div className="tl-marker"><div className="tl-num">2</div><div className="tl-line"></div></div>
              <div className="tl-body"><h3>Organização curricular</h3><p>Classifico e estruturo as atividades acadêmicas conforme os critérios do processo seletivo escolhido.</p></div>
            </div>
            <div className="tl-item">
              <div className="tl-marker"><div className="tl-num">3</div><div className="tl-line"></div></div>
              <div className="tl-body"><h3>Estruturação dos materiais</h3><p>Monto o currículo mestre e as versões adaptadas, com padronização, hierarquia e clareza de leitura.</p></div>
            </div>
            <div className="tl-item">
              <div className="tl-marker"><div className="tl-num">4</div><div className="tl-line"></div></div>
              <div className="tl-body"><h3>Entrega da pasta completa</h3><p>Você recebe a Pasta Residência Médica organizada, pronta para acompanhar suas inscrições.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="recebe">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <h2>O que você recebe</h2>
            <p className="lead">Tudo reunido em uma única pasta organizada: currículos, documentos e materiais de apoio.</p>
          </div>
          <div className="folder-map reveal">
            <svg className="fm-lines" viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <path d="M500 280 L160 67"/><path d="M500 280 L135 207"/><path d="M500 280 L135 353"/><path d="M500 280 L160 493"/>
              <path d="M500 280 L840 67"/><path d="M500 280 L865 207"/><path d="M500 280 L865 353"/><path d="M500 280 L840 493"/>
              <circle cx="500" cy="280" r="4"/>
            </svg>
            <div className="fm-center">
              <svg className="folder-icon" viewBox="0 0 220 180" role="img" aria-label="Pasta Residência Médica">
                <rect x="74" y="22" width="86" height="64" rx="5" fill="#FFFFFF" stroke="#6FA6B8" strokeWidth="1.6"/>
                <line x1="86" y1="40" x2="148" y2="40" stroke="rgba(46,46,46,.16)" strokeWidth="1.4"/>
                <line x1="86" y1="52" x2="148" y2="52" stroke="rgba(46,46,46,.16)" strokeWidth="1.4"/>
                <line x1="86" y1="64" x2="130" y2="64" stroke="rgba(46,46,46,.16)" strokeWidth="1.4"/>
                <rect x="62" y="34" width="100" height="64" rx="5" fill="#F7F9FA" stroke="#6FA6B8" strokeWidth="1.6"/>
                <path d="M30 66 h44 l12 -14 h66 a10 10 0 0 1 10 10 v74 a10 10 0 0 1 -10 10 H30 a10 10 0 0 1 -10 -10 V76 a10 10 0 0 1 10 -10 z" fill="rgba(111,166,184,.16)" stroke="#2F5D62" strokeWidth="1.8"/>
                <path d="M22 92 h176 v52 a10 10 0 0 1 -10 10 H32 a10 10 0 0 1 -10 -10 z" fill="#FFFFFF" stroke="#2F5D62" strokeWidth="1.8"/>
                <line x1="24" y1="92" x2="196" y2="92" stroke="#2F5D62" strokeWidth="1.6"/>
              </svg>
              <div className="fm-folder-label">Pasta Residência Médica</div>
            </div>
            <article className="fm-node n1"><svg className="ico" viewBox="0 0 24 24"><path d="M7 3.5h7L18 7.5V20.5H7z"/><path d="M14 3.5V7.5H18"/><path d="M9.5 12h7M9.5 15.2h7"/></svg><span className="fm-t">Currículo Mestre</span></article>
            <article className="fm-node n2"><svg className="ico" viewBox="0 0 24 24"><path d="M7 3.5h7L18 7.5V20.5H7z"/><path d="M14 3.5V7.5H18"/><path d="M9.5 12.5h7M9.5 15.7h4"/></svg><span className="fm-t">Currículo USP</span></article>
            <article className="fm-node n3"><svg className="ico" viewBox="0 0 24 24"><path d="M7 3.5h7L18 7.5V20.5H7z"/><path d="M14 3.5V7.5H18"/><path d="M9.5 12.5h7M9.5 15.7h4"/></svg><span className="fm-t">Currículo UNICAMP</span></article>
            <article className="fm-node n4"><svg className="ico" viewBox="0 0 24 24"><path d="M7 3.5h7L18 7.5V20.5H7z"/><path d="M14 3.5V7.5H18"/><path d="M9.5 12.5h7M9.5 15.7h4"/></svg><span className="fm-t">Currículo UNIFESP</span></article>
            <article className="fm-node n5"><svg className="ico" viewBox="0 0 24 24"><path d="M4 20.5V9l8-5 8 5v11.5"/><path d="M10 20.5v-5h4v5"/><path d="M12 7.5v.01"/></svg><span className="fm-t">Currículo Hospitais Premium</span></article>
            <article className="fm-node n6"><svg className="ico" viewBox="0 0 24 24"><path d="M6 4h9l3 3v13H6z"/><path d="M8.5 10l1.5 1.5 3-3M8.5 15l1.5 1.5 3-3"/></svg><span className="fm-t">Checklist Documental</span></article>
            <article className="fm-node n7"><svg className="ico" viewBox="0 0 24 24"><rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M4 9.5h16M8 3.5v4M16 3.5v4"/></svg><span className="fm-t">Calendário de Editais</span></article>
            <article className="fm-node n8"><svg className="ico" viewBox="0 0 24 24"><path d="M12 6.2C10.3 5 8.2 4.5 6 4.5v13c2.2 0 4.3.5 6 1.7 1.7-1.2 3.8-1.7 6-1.7v-13c-2.2 0-4.3.5-6 1.7z"/><path d="M12 6.2v13"/></svg><span className="fm-t">Manual Estratégico</span></article>
          </div>
          <div className="recebe-cta reveal">
            <CvExampleModal />
          </div>
        </div>
      </section>

      <section className="section section--cool" id="checklist">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <h2>Checklist de documentos da pasta</h2>
            <p className="lead">A lista operacional do que você precisa reunir e entregar, com o detalhe de cada item. Baixe o PDF completo deixando seu contato.</p>
          </div>
          <div className="checklist-grid reveal">
            <div className="checklist-preview">
              <p className="eyebrow"><span className="rule"></span>Prévia do checklist</p>
              <div className="checkitem done">
                <span className="box" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg></span>
                <div><b>01 · Documentos pessoais</b><span>RG, CPF e identificação profissional.</span></div>
              </div>
              <div className="checkitem">
                <span className="box" aria-hidden="true"></span>
                <div><b>02 · Formação acadêmica</b><span>Histórico escolar e monitorias.</span></div>
              </div>
              <div className="checkitem">
                <span className="box" aria-hidden="true"></span>
                <div><b>03 · Atividades complementares</b><span>Congressos, extensões e certificações.</span></div>
              </div>
              <div className="checkitem">
                <span className="box" aria-hidden="true"></span>
                <div><b>04 · Organização digital</b><span>Árvore de diretórios padronizada.</span></div>
              </div>
              <div className="checkitem">
                <span className="box" aria-hidden="true"></span>
                <div><b>05 · Padronização de arquivos</b><span>Nomeação dos PDFs (ANO_Tipo_Descrição).</span></div>
              </div>
              <p className="checklist-more">Guia completo de 8 páginas, com cada documento e o passo a passo de organização.</p>
            </div>
            <ChecklistForm fileHref="/checklist-pastinha-medica.pdf" phoneNumber={phoneNumber} />
          </div>
        </div>
      </section>

      <section className="section" id="editais">
        <div className="container">
          <div className="section-head reveal">
            <h2>Mapa dos principais editais</h2>
            <p className="lead">Vamos mapear os editais. As janelas de inscrição se aproximam e acompanhamos as bancas e instituições com você, do edital ao envio documental.</p>
          </div>
          <div className="editais-cta reveal">
            <div className="ec-txt">
              <b>Quer a pasta pronta antes do edital abrir?</b>
              <span>Comece pela organização agora e evite correria na inscrição.</span>
            </div>
            <a className="btn btn-primary" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              <svg className="ico-wa" viewBox="0 0 24 24"><path d="M20 11.4a7.4 7.4 0 0 1-10.9 6.6L4 19.4l1.4-4.1A7.4 7.4 0 1 1 20 11.4z"/></svg>
              Fale comigo no WhatsApp
            </a>
          </div>
          <div className="editais-list reveal">
            {editais.map((e) => {
              const premium = e.t.startsWith("Premium");
              return (
                <div className="edital-card" key={e.n}>
                  <b>{e.n}</b>
                  <span className={`pill ${premium ? "gold" : "sage"}`}>{e.t}</span>
                </div>
              );
            })}
          </div>
          <p className="cal-note reveal">Lista de referência das principais bancas e instituições. As datas oficiais variam a cada ano e confirmamos cada edital junto com você.</p>
        </div>
      </section>

      <section className="section section--cool" id="planos">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <h2>Planos disponíveis</h2>
            <p className="lead">Três formatos de trabalho, conforme o número de bancas e a profundidade da organização desejada.</p>
          </div>
          <div className="plans-grid reveal">
            <div className="plan p-ess">
              <div className="plan-name">Essencial</div>
              <div className="plan-rule"></div>
              <ul>
                <li>{check}Currículo adaptado ao barema</li>
                <li>{check}Versão PDF</li>
                <li>{check}Versão editável</li>
                <li>{check}Organização digital da documentação</li>
                <li>{check}Currículo Lattes (quando exigido ou recomendado)</li>
              </ul>
              <div className="plan-price"><span className="pre">Investimento</span><span className="val">R$ 350,00</span></div>
              <a className="btn btn-line" href={whatsappHref("Essencial")} target="_blank" rel="noopener noreferrer">Fale comigo no WhatsApp</a>
            </div>

            <div className="plan featured p-adv">
              <span className="plan-flag">Mais escolhido</span>
              <div className="plan-name">Avançado</div>
              <div className="plan-rule"></div>
              <ul>
                <li>{check}Currículo Mestre (Vitae)</li>
                <li>{check}Currículo adaptado ao barema (formato de acordo com a banca)</li>
                <li>{check}Currículo Hospitais Premium</li>
                <li>{check}Versão PDF</li>
                <li>{check}Versão editável</li>
                <li>{check}Organização digital da documentação</li>
                <li>{check}Checklist da banca personalizado</li>
              </ul>
              <div className="plan-price"><span className="pre">Investimento</span><span className="val">R$ 550,00</span></div>
              <a className="btn btn-primary" href={whatsappHref("Avançado")} target="_blank" rel="noopener noreferrer">Fale comigo no WhatsApp</a>
            </div>

            <div className="plan p-prem">
              <div className="plan-name">Premium</div>
              <div className="plan-rule"></div>
              <ul>
                <li>{check}Currículo Mestre (Vitae)</li>
                <li>{check}Currículo adaptado ao barema (até duas bancas diferentes)</li>
                <li>{check}Currículo Hospitais Premium</li>
                <li>{check}Versão PDF</li>
                <li>{check}Versão editável</li>
                <li>{check}Organização digital da documentação</li>
                <li>{check}Checklist da banca personalizado</li>
                <li>{check}Relatório com a pontuação estimada do candidato</li>
              </ul>
              <div className="plan-price"><span className="pre">Investimento</span><span className="val">R$ 850,00</span></div>
              <a className="btn btn-line" href={whatsappHref("Premium")} target="_blank" rel="noopener noreferrer">Fale comigo no WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" id="faq">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <h2>Perguntas frequentes</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq1">Quais documentos preciso enviar?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq1"><div className="faq-a-inner">Certificados de cursos, monitorias, ligas, pesquisa, extensão, publicações, premiações e demais comprovantes acadêmicos. Logo no início do trabalho, você recebe um checklist para reunir tudo com tranquilidade.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq2">Posso escolher qualquer banca?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq2"><div className="faq-a-inner">Sim. O currículo é estruturado conforme os critérios da banca ou instituição que você indicar. Também é possível preparar versões para mais de um processo seletivo.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq3">Recebo versão editável?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq3"><div className="faq-a-inner">Sim. Além do PDF final, você recebe uma versão editável, para que possa atualizar o material em inscrições futuras.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq4">Qual o prazo de entrega?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq4"><div className="faq-a-inner">O prazo é combinado no início, conforme o volume de documentos e o plano escolhido. Você acompanha cada etapa até a entrega da pasta completa.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq5">O currículo garante aprovação?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq5"><div className="faq-a-inner">Não. O currículo não garante aprovação. O trabalho tem como objetivo organizar e estruturar suas informações de forma clara, profissional e adequada aos critérios documentais de cada processo seletivo.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq6">Posso atualizar meu currículo futuramente?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq6"><div className="faq-a-inner">Sim. Com a versão editável e a organização documental entregue, novas atualizações tornam-se simples: basta acrescentar os novos comprovantes à estrutura já montada.</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="institucional">
        <div className="container">
          <div className="inst-grid">
            <div className="inst-portrait reveal">
              <PortraitPlaceholder />
            </div>
            <div className="inst-text reveal">
              <h2>Quem monta a sua pastinha</h2>
              <p className="first">Oi! Eu sou a <span className="name-hl">Andressa Freire Viana</span>. Se você chegou até aqui, é bem provável que esteja se preparando para a residência e queira deixar a documentação impecável, sem perder ponto por um detalhe de formato. É justamente nisso que eu te ajudo.</p>
              <p>Sou comunicóloga e há mais de seis anos organizo informações e materiais técnicos. Já trabalhei com conteúdo médico em uma startup nacional, como Analista Curricular Médico e como Social Media. Hoje dedico meu tempo a entender os editais, a pontuação e o formato que cada banca exige.</p>
              <p>Eu mesma monto cada pasta, com cuidado e no padrão que a banca espera. Organizo a sua documentação e estruturo os seus currículos. É trabalho operacional, mão na massa ao seu lado: <b>não é mentoria nem curso.</b></p>
              <ul className="inst-points">
                <li><span className="rb-check" aria-hidden="true">{check}</span>Experiência com conteúdo médico</li>
                <li><span className="rb-check" aria-hidden="true">{check}</span>Atuação com análise curricular médica</li>
                <li><span className="rb-check" aria-hidden="true">{check}</span>Estudo contínuo de editais e critérios de pontuação</li>
              </ul>
              <p className="inst-cta-line">Quer entender como ficaria a sua pasta? Me chama, sem compromisso.</p>
              <a className="btn btn-primary inst-cta" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                <svg className="ico-wa" viewBox="0 0 24 24"><path d="M20 11.4a7.4 7.4 0 0 1-10.9 6.6L4 19.4l1.4-4.1A7.4 7.4 0 1 1 20 11.4z"/></svg>
                Fale comigo!
              </a>
              <div className="sealbadge">
                <span className="star" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 4l2.1 4.3 4.7.7-3.4 3.3.8 4.7-4.2-2.2-4.2 2.2.8-4.7L6.2 9l4.7-.7z"/></svg>
                </span>
                <span className="sb-t"><b>Estrutura validada</b><span>Pastinha Médica</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-name">Pastinha Médica</div>
              <div className="footer-tagline">Trabalho operacional: montagem de currículos e organização da pasta de documentos para residência médica. Por Andressa Freire Viana.</div>
            </div>
            <a className="btn btn-primary" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              <svg className="ico-wa" viewBox="0 0 24 24"><path d="M20 11.4a7.4 7.4 0 0 1-10.9 6.6L4 19.4l1.4-4.1A7.4 7.4 0 1 1 20 11.4z"/></svg>
              Fale comigo no WhatsApp
            </a>
          </div>
          <div className="footer-contact">
            <div className="fc-block">
              <div className="fc-label">WhatsApp</div>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">(14) 99145-7503</a>
            </div>
            <div className="fc-block">
              <div className="fc-label">E-mail</div>
              <a href="mailto:andressafreireviana@gmail.com">andressafreireviana@gmail.com</a>
            </div>
          </div>
          <div className="footer-bottom">
            <small>© 2026 Andressa Freire Viana. Todos os direitos reservados.</small>
            <small>Pastinha Médica · Currículo médico · Residência médica</small>
          </div>
        </div>
      </footer>

      <a
        className="wa-float"
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale comigo no WhatsApp"
      >
        <span className="wa-float-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M20 11.4a7.4 7.4 0 0 1-10.9 6.6L4 19.4l1.4-4.1A7.4 7.4 0 1 1 20 11.4z"/></svg>
        </span>
        <span className="wa-float-label">Fale comigo</span>
      </a>
    </div>
  );
}
