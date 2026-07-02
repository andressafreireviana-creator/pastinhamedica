import Image from "next/image";
import { LandingInteractions } from "./landing-interactions";
import { ChecklistForm } from "./checklist-form";
import { CvExampleModal } from "./cv-modal";
import { editais } from "./editais-data";

type PlanName = "Essencial" | "Avançado" | "Premium";

const phoneNumber = "5514991457503";

// Placeholder on-brand em public/andressa.jpg. Substitua pelo arquivo real
// (mesmo caminho) que a foto aparece automaticamente.
const andressaPhotoSrc = "/andressa.jpg";

function statusPill(status?: string) {
  switch (status) {
    case "Inscrição em breve":
      return "rose";
    case "Inscrições abertas":
      return "ok";
    case "Encerrado":
      return "muted";
    default:
      return "ok";
  }
}

function whatsappHref(plan?: PlanName) {
  const message = plan
    ? `Olá, Andressa. Tenho interesse no Plano ${plan} para organizar meu currículo para residência médica.`
    : "Olá, Andressa. Quero organizar meu currículo para residência médica.";

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

const waIcon = (
  <svg className="ico-wa" viewBox="0 0 24 24"><path d="M20 11.4a7.4 7.4 0 0 1-10.9 6.6L4 19.4l1.4-4.1A7.4 7.4 0 1 1 20 11.4z"/></svg>
);

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
            <a href="#recebe">O que você recebe</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#editais">Editais</a>
            <a href="#planos">Planos</a>
            <a href="#institucional">Quem sou</a>
          </nav>
          <div className="header-cta">
            <a className="btn btn-primary btn-sm" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              {waIcon}
              <span className="lbl">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main id="conteudo">

      {/* 1 — HERO */}
      <section className="hero hero--offer" aria-label="Apresentação">
        <div className="container">
          <div className="hero-offer reveal">
            <h1 className="hero-name">Seu currículo para residência médica, elaborado conforme os critérios da banca.</h1>
            <p className="hero-sub">Você envia sua documentação e nós organizamos a sua pasta e elaboramos o currículo no formato exigido pelo edital da banca escolhida. Um serviço operacional para estudantes de Medicina, internos e recém-formados na corrida pela residência.</p>

            <div className="alert alert--calm" role="note">
              <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 19 6v5c0 4.3-2.9 7.3-7 8.6C7.9 18.3 5 15.3 5 11V6z" /><path d="M9 11.5l2 2 4-4" /></svg>
              <div>
                <span className="alert-label">Por que isso importa</span>
                <p>Evite perder pontos por documentação desorganizada. Cada item entra na pasta no padrão que a banca espera avaliar.</p>
              </div>
            </div>

            <div className="opbox">
              <div className="is">
                <div className="op-h">✓ É</div>
                <p>Serviço operacional: organização documental e elaboração do currículo, na ordem e no formato do edital.</p>
              </div>
              <div className="isnot">
                <div className="op-h">✕ Não é</div>
                <p>Mentoria, coaching, curso ou consultoria. É a execução técnica do trabalho, feita por nós.</p>
              </div>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                {waIcon}
                Quero organizar meu currículo
              </a>
              <a className="btn btn-line" href="#checklist">Baixar checklist de documentos</a>
            </div>

            <div className="hero-rule"></div>
            <div className="hero-foot">
              <div className="hero-banks">
                <span className="hb-label">Para as principais bancas e instituições</span>
                <p className="hb-list">UNICAMP, UNIFESP, USP-SP/RP, UFMG e muitas outras…</p>
              </div>
              <a className="btn btn-line" href="#editais">Consultar editais</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — AUTORIDADE / MÉTODO (sem prova social) */}
      <section className="section section--white" id="metodo" aria-label="Especialização e método">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <h2>Especialização que está no método</h2>
            <p className="lead">Não é mentoria nem curso. É execução técnica, baseada nos critérios oficiais de cada edital.</p>
          </div>
          <div className="grid-2 reveal">
            <div className="diff">
              <svg className="ico" viewBox="0 0 24 24"><path d="M7 3.5h7L18 7.5V20.5H7z"/><path d="M14 3.5V7.5H18"/><path d="M9.5 12h7M9.5 15.2h5"/></svg>
              <div><h3>Organização documental baseada nos editais</h3><p>Cada documento entra na pasta seguindo o anexo e as exigências do processo seletivo.</p></div>
            </div>
            <div className="diff">
              <svg className="ico" viewBox="0 0 24 24"><path d="M12 3.5 3.5 8 12 12.5 20.5 8z"/><path d="M3.5 12 12 16.5 20.5 12"/></svg>
              <div><h3>Currículos personalizados conforme a banca</h3><p>Versões específicas para diferentes bancas de residência médica, no formato que cada uma pede.</p></div>
            </div>
            <div className="diff">
              <svg className="ico" viewBox="0 0 24 24"><path d="M8 6h11M8 12h11M8 18h9"/><path d="M4 6h.01M4 12h.01M4 18h.01"/></svg>
              <div><h3>Processo estruturado por critérios oficiais</h3><p>Cada etapa segue os critérios de pontuação e apresentação definidos no edital.</p></div>
            </div>
            <div className="diff">
              <svg className="ico" viewBox="0 0 24 24"><path d="M12 3.5 19 6v5c0 4.3-2.9 7.3-7 8.6C7.9 18.3 5 15.3 5 11V6z"/><path d="M9 11.5l2 2 4-4"/></svg>
              <div><h3>Metodologia para reduzir erros na análise</h3><p>Padronização e conferência pensadas para diminuir falhas e glosas por formato.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — O QUE VOCÊ RECEBE (primeiro, antes dos detalhes) */}
      <section className="section" id="recebe" aria-label="O que você recebe">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <h2>O que você recebe</h2>
            <p className="lead">Tudo reunido em uma única pasta organizada: currículos, documentos e materiais de apoio, prontos para a inscrição.</p>
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
          <p className="section-note reveal">Organize a sua trajetória de forma clara e objetiva, com tudo no lugar certo na hora da inscrição.</p>
          <div className="recebe-cta reveal">
            <CvExampleModal />
          </div>
        </div>
      </section>

      {/* 4 — COMO FUNCIONA (5 passos) */}
      <section className="section section--white" id="como-funciona" aria-label="Como funciona">
        <div className="container">
          <div className="section-head reveal">
            <h2>Como funciona</h2>
            <p className="lead">Um processo simples e estruturado, do seu envio à entrega final. Você acompanha cada etapa.</p>
          </div>
          <div className="timeline reveal">
            <div className="tl-item">
              <div className="tl-marker"><div className="tl-num">1</div><div className="tl-line"></div></div>
              <div className="tl-body"><h3>Você envia sua documentação</h3><p>Reúne seus comprovantes com o apoio do nosso checklist e envia tudo pelo WhatsApp.</p></div>
            </div>
            <div className="tl-item">
              <div className="tl-marker"><div className="tl-num">2</div><div className="tl-line"></div></div>
              <div className="tl-body"><h3>Analisamos seus documentos</h3><p>Conferimos cada comprovante e identificamos o que pontua no edital da banca escolhida.</p></div>
            </div>
            <div className="tl-item">
              <div className="tl-marker"><div className="tl-num">3</div><div className="tl-line"></div></div>
              <div className="tl-body"><h3>Organizamos toda a sua pasta</h3><p>Classificamos e estruturamos a documentação na ordem exigida pelo anexo do edital.</p></div>
            </div>
            <div className="tl-item">
              <div className="tl-marker"><div className="tl-num">4</div><div className="tl-line"></div></div>
              <div className="tl-body"><h3>Elaboramos seu currículo conforme a banca</h3><p>Montamos o currículo no formato e nos critérios da banca, com padronização e clareza de leitura.</p></div>
            </div>
            <div className="tl-item">
              <div className="tl-marker"><div className="tl-num">5</div><div className="tl-line"></div></div>
              <div className="tl-body"><h3>Você recebe tudo pronto para envio</h3><p>Pasta e currículo finalizados, em PDF e versão editável, prontos para a sua inscrição.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — POR QUE IMPORTA */}
      <section className="section section--cool" id="contexto" aria-label="Por que o currículo importa">
        <div className="container">
          <div className="section-head reveal">
            <h2>Por que o currículo importa</h2>
            <p className="lead">Em muitos processos seletivos de residência médica, a análise curricular influencia diretamente a classificação final do candidato.</p>
            <p className="body-note context-note">Atividades acadêmicas, monitorias, pesquisa científica, extensão universitária e produção intelectual costumam compor parte da pontuação dos editais. Apresentar tudo isso conforme os critérios da banca reduz problemas na inscrição e evita a perda de pontos por formato.</p>
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

      {/* 6 — EDITAIS */}
      <section className="section" id="editais" aria-label="Mapa dos editais">
        <div className="container">
          <div className="section-head reveal">
            <h2>Editais de residência médica: inscrições, datas e previsões</h2>
            <p className="lead">Acompanhe as inscrições, as datas de prova e as previsões dos principais editais de residência médica (USP, UNICAMP, UNIFESP, UNESP, Einstein, Sírio-Libanês e outras bancas) e apresente seu currículo conforme os critérios de cada banca.</p>
          </div>
          <div className="editais-cta reveal">
            <div className="ec-txt">
              <b>Quer a pasta pronta com antecedência?</b>
              <span>Comece a organização agora, no seu ritmo, e chegue tranquilo à inscrição.</span>
            </div>
            <a className="btn btn-primary" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              {waIcon}
              Quero organizar meu currículo
            </a>
          </div>
          <div className="editais-list reveal">
            {editais.map((e) => {
              const premium = e.t.startsWith("Premium");
              return (
                <div className="edital-card" key={e.n}>
                  <div className="ec-top">
                    <b>{e.n}</b>
                    <span className={`pill ${premium ? "gold" : "sage"}`}>{e.t}</span>
                  </div>
                  <dl className="ec-dates">
                    <div><dt>Inscrição</dt><dd>{e.inscricao ?? "A confirmar"}</dd></div>
                    <div><dt>Prova</dt><dd>{e.prova ?? "A confirmar"}</dd></div>
                  </dl>
                  <div className="ec-foot">
                    <span className={`pill ${statusPill(e.status)}`}>{e.status ?? "A confirmar"}</span>
                    {e.url && (
                      <a className="ec-link" href={e.url} target="_blank" rel="noopener noreferrer">
                        Ver edital
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="cal-note reveal">Lista de referência das principais bancas e instituições. As datas oficiais variam a cada ano e confirmamos cada edital junto com você.</p>
        </div>
      </section>

      {/* 7 — QUEM MONTA (antecipada, antes dos planos) */}
      <section className="section section--white" id="institucional" aria-label="Quem monta a sua pastinha">
        <div className="container">
          <div className="inst-grid">
            <div className="inst-portrait reveal">
              <PortraitPlaceholder />
            </div>
            <div className="inst-text reveal">
              <h2>Quem monta a sua pastinha</h2>
              <p className="first">Oi! Eu sou a <span className="name-hl">Andressa Freire Viana</span>, quem opera a Pastinha Médica. Se você chegou até aqui, provavelmente está se preparando para a residência e quer deixar a documentação impecável, sem perder ponto por um detalhe de formato.</p>
              <p>Sou comunicóloga e há mais de seis anos organizo informações e materiais técnicos. Já trabalhei com conteúdo médico em uma startup nacional, como Analista Curricular Médico e como Social Media. Hoje dedico meu tempo a entender os editais, a pontuação e o formato que cada banca exige.</p>
              <p>Eu mesma cuido de cada pasta, com método e no padrão que a banca espera. Organizo a sua documentação e elaboro os seus currículos. É trabalho operacional, técnico e ao seu lado: <b>não é mentoria nem curso.</b></p>
              <ul className="inst-points">
                <li><span className="rb-check" aria-hidden="true">{check}</span>Experiência com conteúdo médico</li>
                <li><span className="rb-check" aria-hidden="true">{check}</span>Atuação com análise curricular médica</li>
                <li><span className="rb-check" aria-hidden="true">{check}</span>Estudo contínuo de editais e critérios de pontuação</li>
              </ul>
              <p className="inst-cta-line">Quer entender como ficaria a sua pasta? Me chama, sem compromisso.</p>
              <a className="btn btn-primary inst-cta" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                {waIcon}
                Falar pelo WhatsApp
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

      {/* 8 — PLANOS */}
      <section className="section section--cool" id="planos" aria-label="Planos">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <h2>Escolha como quer organizar seu currículo</h2>
            <p className="lead">Três formatos de trabalho, conforme o número de bancas e a profundidade da organização desejada.</p>
          </div>
          <div className="plans-grid reveal">
            <div className="plan p-ess">
              <div className="plan-name">Essencial</div>
              <p className="plan-desc">Para quem vai concorrer em uma banca.</p>
              <div className="plan-rule"></div>
              <ul>
                <li>{check}Currículo adaptado ao barema (no formato exigido pela banca)</li>
                <li>{check}Versão PDF</li>
                <li>{check}Versão editável</li>
                <li>{check}Organização digital da documentação</li>
              </ul>
              <div className="plan-price"><span className="pre">Investimento</span><span className="val">R$ 250,00</span></div>
              <a className="btn btn-line" href={whatsappHref("Essencial")} target="_blank" rel="noopener noreferrer">Quero este plano</a>
            </div>

            <div className="plan featured p-adv">
              <span className="plan-flag">Mais escolhido</span>
              <div className="plan-name">Avançado</div>
              <p className="plan-desc">Para quem disputa mais de uma banca.</p>
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
              <div className="plan-price"><span className="pre">Investimento</span><span className="val">R$ 450,00</span></div>
              <a className="btn btn-primary" href={whatsappHref("Avançado")} target="_blank" rel="noopener noreferrer">Quero este plano</a>
            </div>

            <div className="plan p-prem">
              <div className="plan-name">Premium</div>
              <p className="plan-desc">Cobertura completa, com relatório de pontuação.</p>
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
              <div className="plan-price"><span className="pre">Investimento</span><span className="val">R$ 750,00</span></div>
              <a className="btn btn-line" href={whatsappHref("Premium")} target="_blank" rel="noopener noreferrer">Quero este plano</a>
            </div>
          </div>
          <p className="plans-note reveal">Ficou em dúvida sobre qual plano combina com o seu caso? <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">Fale comigo no WhatsApp</a> que eu te oriento.</p>
        </div>
      </section>

      {/* 9 — CHECKLIST (isca / oferta de baixo compromisso) */}
      <section className="section section--white" id="checklist" aria-label="Checklist de documentos">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <h2>Ainda organizando as ideias? Comece pelo checklist</h2>
            <p className="lead">Baixe gratuitamente a lista completa dos documentos da pasta, com o detalhe de cada item, e já saia na frente.</p>
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

      {/* 10 — FAQ */}
      <section className="section" id="faq" aria-label="Perguntas frequentes">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <h2>Perguntas frequentes</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq1">O que exatamente a Pastinha Médica faz?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq1"><div className="faq-a-inner">Organizamos a sua documentação e elaboramos o seu currículo médico no formato exigido pelo edital da banca escolhida. Você envia os comprovantes e nós fazemos todo o trabalho técnico de organização e estruturação da pasta. Não é mentoria, curso ou consultoria: é a execução operacional do serviço.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq2">Quais documentos preciso enviar?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq2"><div className="faq-a-inner">Certificados de cursos, monitorias, ligas, pesquisa, extensão, publicações, premiações e demais comprovantes acadêmicos. Logo no início você recebe um checklist para reunir tudo com tranquilidade.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq3">Vocês atendem qualquer banca?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq3"><div className="faq-a-inner">Sim. O currículo é elaborado conforme os critérios da banca ou instituição que você indicar. Também é possível preparar versões para mais de um processo seletivo.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq4">Como recebo o material?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq4"><div className="faq-a-inner">Você recebe o currículo em PDF final e em versão editável, junto com a pasta organizada. Assim fica pronto para a inscrição e fácil de atualizar em processos futuros.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq5">Qual o prazo de entrega?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq5"><div className="faq-a-inner">O prazo é combinado no início, conforme o volume de documentos e o plano escolhido. Você acompanha cada etapa até a entrega da pasta completa.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq6">O currículo garante aprovação?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq6"><div className="faq-a-inner">Não. O currículo não garante aprovação. O objetivo é organizar e apresentar as suas informações de forma clara, profissional e adequada aos critérios documentais de cada processo seletivo.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq7">Quando abrem as inscrições da residência médica?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq7"><div className="faq-a-inner">As datas variam a cada ano e por banca. USP, UNICAMP e UNIFESP costumam abrir as inscrições entre setembro e outubro, com provas entre novembro e dezembro. No mapa de editais do site você acompanha a previsão de inscrição, a data de prova e o link oficial de cada banca.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" aria-expanded="false" aria-controls="faq8">Quais editais de residência médica vocês acompanham?<span className="faq-icon" aria-hidden="true"></span></button>
              <div className="faq-a" id="faq8"><div className="faq-a-inner">Acompanhamos os principais editais: PSU-MG (AREMG), USP-SP, USP-RP, UNICAMP, UNIFESP, UNESP, Einstein, Sírio-Libanês, HCPA, HC-UFPR, HC-UFMG, FAMERP, Beneficência Portuguesa e Hospital Moinhos de Vento, com a pasta de documentos montada conforme cada edital.</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — CTA FINAL */}
      <section className="section section--cool" id="contato" aria-label="Fale com a Pastinha Médica">
        <div className="container">
          <div className="editais-cta cta-final reveal">
            <div className="ec-txt">
              <b>Pronto para deixar seu currículo no padrão da banca?</b>
              <span>Envie sua documentação pelo WhatsApp e cuidamos de toda a organização e elaboração para você.</span>
            </div>
            <a className="btn btn-primary" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              {waIcon}
              Quero organizar meu currículo
            </a>
          </div>
        </div>
      </section>

      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-name">Pastinha Médica</div>
              <div className="footer-tagline">Serviço operacional de organização documental e elaboração de currículos médicos para residência, conforme a banca. Por Andressa Freire Viana.</div>
            </div>
            <a className="btn btn-primary" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              {waIcon}
              Falar pelo WhatsApp
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
        aria-label="Falar pelo WhatsApp"
      >
        <span className="wa-float-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M20 11.4a7.4 7.4 0 0 1-10.9 6.6L4 19.4l1.4-4.1A7.4 7.4 0 1 1 20 11.4z"/></svg>
        </span>
        <span className="wa-float-label">Fale comigo</span>
      </a>
    </div>
  );
}
