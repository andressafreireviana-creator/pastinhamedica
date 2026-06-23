import Image from "next/image";
import { LandingInteractions } from "./landing-interactions";

type PlanName = "Essencial" | "Avançado" | "Premium";

const phoneNumber = "5514991457503";

// Depois de adicionar public/andressa.jpg, altere para "/andressa.jpg".
const andressaPhotoSrc = "";

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

export default function Home() {
  return (
    <div id="top">
      <LandingInteractions />
      <header className="site-header" id="siteHeader">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="Andressa Freire Viana — início">
            <b>Andressa&nbsp;Freire&nbsp;Viana</b>
          </a>
          <nav className="nav-links" aria-label="Navegação principal">
            <a href="#recebe">O que você recebe</a>
            <a href="#planos">Planos</a>
            <a href="#institucional">Quem desenvolve</a>
          </nav>
          <div className="header-cta">
            <a className="btn btn-primary btn-sm" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              <svg className="ico-wa" viewBox="0 0 24 24"><path d="M20 11.4a7.4 7.4 0 0 1-10.9 6.6L4 19.4l1.4-4.1A7.4 7.4 0 1 1 20 11.4z"/></svg>
              <span className="lbl">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>
      
      <main>
      
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-left reveal">
            <h1 className="hero-name">Andressa<br />Freire Viana</h1>
            <p className="hero-statement">Sua trajetória acadêmica merece ser apresentada da forma correta.</p>
            <p className="hero-support">Organização curricular e documental para candidatos à residência médica.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                <svg className="ico-wa" viewBox="0 0 24 24"><path d="M20 11.4a7.4 7.4 0 0 1-10.9 6.6L4 19.4l1.4-4.1A7.4 7.4 0 1 1 20 11.4z"/></svg>
                Solicitar pelo WhatsApp
              </a>
              <a className="btn btn-line" href="#institucional">
                Quem desenvolve seu currículo
                <svg className="ico-arrow" viewBox="0 0 24 24"><path d="M12 5v13M6 12l6 6 6-6"/></svg>
              </a>
            </div>
            <div className="hero-rule"></div>
          </div>
          <div className="hero-right reveal">
            <PortraitPlaceholder />
          </div>
        </div>
      </section>
      
      <section className="section section--white" id="contexto">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="num">01</span><span className="rule"></span>Contexto</p>
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
        </div>
      </section>
      
      <section className="section" id="dificuldades">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="num">02</span><span className="rule"></span>Diagnóstico</p>
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
            <p className="eyebrow"><span className="num">03</span><span className="rule"></span>Processo</p>
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
            <p className="eyebrow"><span className="num">04</span><span className="rule"></span>Entrega</p>
            <h2>O que você recebe</h2>
            <p className="lead">Tudo reunido em uma única pasta organizada — currículos, documentos e materiais de apoio.</p>
          </div>
          <div className="folder-map reveal">
            <svg className="fm-lines" viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <path d="M500 280 L160 67"/><path d="M500 280 L135 207"/><path d="M500 280 L135 353"/><path d="M500 280 L160 493"/>
              <path d="M500 280 L840 67"/><path d="M500 280 L865 207"/><path d="M500 280 L865 353"/><path d="M500 280 L840 493"/>
              <circle cx="500" cy="280" r="4"/>
            </svg>
            <div className="fm-center">
              <svg className="folder-icon" viewBox="0 0 220 180" role="img" aria-label="Pasta Residência Médica">
                <rect x="74" y="22" width="86" height="64" rx="5" fill="#FFFFFF" stroke="#7C9A92" strokeWidth="1.6"/>
                <line x1="86" y1="40" x2="148" y2="40" stroke="rgba(68,68,68,.16)" strokeWidth="1.4"/>
                <line x1="86" y1="52" x2="148" y2="52" stroke="rgba(68,68,68,.16)" strokeWidth="1.4"/>
                <line x1="86" y1="64" x2="130" y2="64" stroke="rgba(68,68,68,.16)" strokeWidth="1.4"/>
                <rect x="62" y="34" width="100" height="64" rx="5" fill="#FCFAF7" stroke="#7C9A92" strokeWidth="1.6"/>
                <path d="M30 66 h44 l12 -14 h66 a10 10 0 0 1 10 10 v74 a10 10 0 0 1 -10 10 H30 a10 10 0 0 1 -10 -10 V76 a10 10 0 0 1 10 -10 z" fill="rgba(124,154,146,.16)" stroke="#7C9A92" strokeWidth="1.8"/>
                <path d="M22 92 h176 v52 a10 10 0 0 1 -10 10 H32 a10 10 0 0 1 -10 -10 z" fill="#FFFFFF" stroke="#7C9A92" strokeWidth="1.8"/>
                <line x1="24" y1="92" x2="196" y2="92" stroke="#7C9A92" strokeWidth="1.6"/>
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
        </div>
      </section>
      
      <section className="section section--white" id="exemplo">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow"><span className="num">05</span><span className="rule"></span>Amostra</p>
            <h2>Exemplo de estrutura curricular</h2>
            <p className="lead">Uma amostra visual, com dados fictícios, para demonstrar como as informações podem ser organizadas com clareza.</p>
          </div>
          <div className="cv-wrap reveal">
            <article className="cv-paper">
              <span className="cv-tag">Exemplo fictício</span>
              <header className="cv-head">
                <div className="cv-name">Marina Almeida Ribeiro</div>
                <div className="cv-role">Medicina — Universidade Federal de Vale Verde</div>
                <div className="cv-contact">São Paulo, SP · contato@exemplo.com · (00) 00000-0000 — dados fictícios</div>
              </header>
              <div className="cv-section">
                <div className="cv-label">Formação Acadêmica</div>
                <div className="cv-entry">
                  <div className="et"><b>Graduação em Medicina</b><span>2019 – 2024</span></div>
                  <p>Universidade Federal de Vale Verde (instituição fictícia, utilizada apenas para demonstração).</p>
                </div>
              </div>
              <div className="cv-section">
                <div className="cv-label">Atividades Acadêmicas</div>
                <div className="cv-entry">
                  <div className="et"><b>Monitoria em Clínica Médica</b><span>2022 – 2023</span></div>
                  <p>Departamento de Clínica Médica · 120 horas · seleção por desempenho acadêmico.</p>
                </div>
                <div className="cv-entry">
                  <div className="et"><b>Liga Acadêmica de Cardiologia</b><span>2021 – 2023</span></div>
                  <p>Membro efetivo e diretora de pesquisa · organização de cursos e ações de extensão.</p>
                </div>
                <div className="cv-entry">
                  <div className="et"><b>Iniciação Científica (PIBIC)</b><span>2022 – 2023</span></div>
                  <p>Projeto &quot;Marcadores inflamatórios na insuficiência cardíaca&quot; · bolsa de iniciação científica.</p>
                </div>
                <div className="cv-entry">
                  <div className="et"><b>Apresentação em Congresso</b><span>2023</span></div>
                  <p>XII Congresso de Clínica Médica (fictício) · apresentação oral de trabalho.</p>
                </div>
                <div className="cv-entry">
                  <div className="et"><b>Publicação de Resumo</b><span>2023</span></div>
                  <p>Anais do XII Congresso de Clínica Médica (fictício) · resumo expandido.</p>
                </div>
                <div className="cv-entry">
                  <div className="et"><b>Projeto de Extensão</b><span>2021 – 2022</span></div>
                  <p>&quot;Saúde na Comunidade&quot; · ações de educação em saúde em unidades básicas.</p>
                </div>
              </div>
              <div className="cv-section">
                <div className="cv-label">Premiações</div>
                <div className="cv-entry">
                  <div className="et"><b>Menção honrosa</b><span>2023</span></div>
                  <p>Mostra Científica de Vale Verde (fictícia) · categoria pesquisa clínica.</p>
                </div>
              </div>
              <p className="cv-foot">Documento ilustrativo, com dados fictícios, criado exclusivamente para demonstrar a organização visual das informações. Não representa pessoa real.</p>
            </article>
          </div>
          <p className="cv-caption reveal">A estrutura final é adaptada aos critérios da banca escolhida e aos seus documentos reais.</p>
        </div>
      </section>
      
      <section className="section" id="calendario">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="num">06</span><span className="rule"></span>Datas</p>
            <h2>Calendário de editais</h2>
            <p className="lead">Uma visão organizada das principais datas para acompanhar inscrições, provas e envio de documentos.</p>
          </div>
          <div className="calendar reveal">
            <div className="cal-row cal-head">
              <div className="cal-cell">Instituição / Banca</div>
              <div className="cal-cell">Previsão de inscrição</div>
              <div className="cal-cell">Data da prova</div>
              <div className="cal-cell">Envio documental</div>
              <div className="cal-cell">Status</div>
            </div>
            <div className="cal-row">
              <div className="cal-cell inst" data-label="">USP-SP</div>
              <div className="cal-cell" data-label="Inscrição">Prevista para setembro</div>
              <div className="cal-cell" data-label="Prova">Novembro</div>
              <div className="cal-cell" data-label="Envio documental"><span className="pill sage">Análise curricular</span></div>
              <div className="cal-cell" data-label="Status">Previsto</div>
            </div>
            <div className="cal-row">
              <div className="cal-cell inst" data-label="">UNICAMP</div>
              <div className="cal-cell" data-label="Inscrição">Prevista para outubro</div>
              <div className="cal-cell" data-label="Prova">Novembro</div>
              <div className="cal-cell" data-label="Envio documental"><span className="pill sage">Currículo / Lattes</span></div>
              <div className="cal-cell" data-label="Status">Previsto</div>
            </div>
            <div className="cal-row">
              <div className="cal-cell inst" data-label="">UNIFESP</div>
              <div className="cal-cell" data-label="Inscrição">Prevista para outubro</div>
              <div className="cal-cell" data-label="Prova">Dezembro</div>
              <div className="cal-cell" data-label="Envio documental"><span className="pill sage">Currículo / Lattes</span></div>
              <div className="cal-cell" data-label="Status">Previsto</div>
            </div>
            <div className="cal-row">
              <div className="cal-cell inst" data-label="">Hospitais Premium</div>
              <div className="cal-cell" data-label="Inscrição">Datas variáveis</div>
              <div className="cal-cell" data-label="Prova">Conforme edital</div>
              <div className="cal-cell" data-label="Envio documental"><span className="pill rose">Acompanhar edital</span></div>
              <div className="cal-cell" data-label="Status">A confirmar</div>
            </div>
          </div>
          <p className="cal-note reveal">Datas ilustrativas para fins de demonstração. O calendário final deve ser atualizado conforme os editais oficiais.</p>
        </div>
      </section>
      
      <section className="section section--white" id="resultados">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow"><span className="num">07</span><span className="rule"></span>Resultado</p>
            <h2>Resultados deste trabalho</h2>
            <p className="lead">O que muda, na prática, quando o currículo e a documentação estão bem organizados.</p>
          </div>
          <div className="results-grid reveal">
            <div className="result"><svg className="ico-check" viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg><div><h3>Mais organização documental</h3><p>Todos os comprovantes reunidos, classificados e fáceis de localizar.</p></div></div>
            <div className="result"><svg className="ico-check" viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg><div><h3>Mais segurança durante a inscrição</h3><p>Menos dúvidas e imprevistos no momento de enviar os documentos.</p></div></div>
            <div className="result"><svg className="ico-check" viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg><div><h3>Currículos estruturados profissionalmente</h3><p>Apresentação padronizada, clara e adequada a cada processo seletivo.</p></div></div>
            <div className="result"><svg className="ico-check" viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg><div><h3>Menos risco de perda de pontuação</h3><p>Documentação adequada reduz falhas que poderiam custar pontos por inconsistência.</p></div></div>
            <div className="result"><svg className="ico-check" viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg><div><h3>Maior facilidade para futuras inscrições</h3><p>Com a versão editável, atualizar o currículo se torna simples e rápido.</p></div></div>
            <div className="result"><svg className="ico-check" viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg><div><h3>Apresentação mais clara das atividades</h3><p>Sua trajetória acadêmica fica legível e bem hierarquizada para a banca.</p></div></div>
          </div>
        </div>
      </section>
      
      <section className="section" id="planos">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow"><span className="num">08</span><span className="rule"></span>Planos</p>
            <h2>Planos disponíveis</h2>
            <p className="lead">Três formatos de trabalho, conforme o número de bancas e a profundidade da organização desejada.</p>
          </div>
          <div className="plans-grid reveal">
            <div className="plan">
              <div className="plan-name">Essencial</div>
              <div className="plan-rule"></div>
              <ul>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Currículo Mestre</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Currículo para banca específica</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Versão PDF</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Versão editável</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Organização de documentos</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Checklist documental</li>
              </ul>
              <div className="plan-price"><span className="pre">Investimento</span><span className="val">R$ 350,00</span></div>
              <a className="btn btn-line" href={whatsappHref("Essencial")} target="_blank" rel="noopener noreferrer">Solicitar pelo WhatsApp</a>
            </div>
      
            <div className="plan featured">
              <span className="plan-flag">Mais escolhido</span>
              <div className="plan-name">Avançado</div>
              <div className="plan-rule"></div>
              <ul>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Currículo Mestre</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Dois currículos para banca específica</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Currículo Hospitais Premium</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Versão PDF</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Versão editável</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Organização de documentos</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Checklist documental</li>
              </ul>
              <div className="plan-price"><span className="pre">Investimento</span><span className="val">R$ 550,00</span></div>
              <a className="btn btn-primary" href="https://wa.me/5514991457503">Solicitar pelo WhatsApp</a>
            </div>
      
            <div className="plan">
              <div className="plan-name">Premium</div>
              <div className="plan-rule"></div>
              <ul>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Currículo Mestre</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Currículo USP</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Currículo UNICAMP</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Currículo UNIFESP</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Currículo Hospitais Premium</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Versão PDF e versão editável</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Organização de documentos</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Checklist documental</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.3 4.3L19 7.2"/></svg>Manual Estratégico de Currículo</li>
              </ul>
              <div className="plan-price"><span className="pre">Investimento</span><span className="val">R$ 850,00</span></div>
              <a className="btn btn-line" href={whatsappHref("Premium")} target="_blank" rel="noopener noreferrer">Solicitar pelo WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" id="confianca">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow"><span className="num">09</span><span className="rule"></span>Confiança</p>
            <h2>Confiança construída no detalhe</h2>
            <p className="lead">Antes de qualquer promessa, o trabalho se apoia em experiência, prática e estudo contínuo.</p>
          </div>
          <div className="trust-grid reveal">
            <div className="trust-card">
              <span className="tnum">I</span>
              <h3>Experiência com conteúdo médico</h3>
              <p>Anos de trabalho com produção de conteúdo na área médica, ao lado de equipes técnicas e editoriais.</p>
            </div>
            <div className="trust-card">
              <span className="tnum">II</span>
              <h3>Atuação com análise curricular médica</h3>
              <p>Vivência prática na avaliação e na organização de currículos para processos seletivos da área da saúde.</p>
            </div>
            <div className="trust-card">
              <span className="tnum">III</span>
              <h3>Estudo contínuo de editais e critérios de pontuação</h3>
              <p>Acompanhamento das normas das principais bancas e dos critérios que orientam a análise curricular.</p>
            </div>
          </div>
          <div className="testimonial-reserved reveal">
            <div className="tr-label">Depoimentos</div>
            <p>Espaço reservado para depoimentos de clientes, quando autorizados.</p>
          </div>
        </div>
      </section>
      
      <section className="section section--white" id="faq">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow"><span className="num">10</span><span className="rule"></span>Dúvidas</p>
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
              <div className="faq-a" id="faq6"><div className="faq-a-inner">Sim. Com a versão editável e a organização documental entregue, novas atualizações tornam-se simples — basta acrescentar os novos comprovantes à estrutura já montada.</div></div>
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
              <p className="eyebrow"><span className="num">11</span><span className="rule"></span>Autoria</p>
              <h2>Quem desenvolve seu currículo</h2>
              <p className="first">Meu nome é <span className="name-hl">Andressa Freire Viana</span>. Sou comunicóloga e atuo há mais de seis anos com produção de conteúdo, organização de informações e desenvolvimento de materiais estratégicos.</p>
              <p>Ao longo da minha trajetória, trabalhei com conteúdo médico em uma startup reconhecida nacionalmente, atuei como Analista Curricular Médico e também como Social Media em agência de marketing. Essas experiências me permitiram desenvolver uma visão detalhada sobre organização documental, comunicação e valorização de trajetórias profissionais.</p>
              <p>Nos últimos anos, concentrei meus estudos nos processos seletivos de residência médica e nos critérios utilizados pelas principais bancas do país. Passei a analisar editais, sistemas de pontuação e formas de apresentação curricular, buscando compreender como cada atividade acadêmica pode ser organizada e apresentada de maneira clara e consistente.</p>
              <p>Hoje, cada material é elaborado pessoalmente por mim. Meu trabalho consiste em transformar documentos, certificados e experiências acadêmicas em currículos estruturados, organizados e adequados aos processos seletivos para os quais foram desenvolvidos.</p>
              <p className="inst-closing">Acredito que uma trajetória construída ao longo de anos merece ser apresentada com o mesmo cuidado dedicado à sua formação.</p>
            </div>
          </div>
        </div>
      </section>
      
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-name">Andressa Freire Viana</div>
              <div className="footer-tagline">Organização e estruturação de currículos médicos para residência.</div>
            </div>
            <a className="btn btn-primary" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              <svg className="ico-wa" viewBox="0 0 24 24"><path d="M20 11.4a7.4 7.4 0 0 1-10.9 6.6L4 19.4l1.4-4.1A7.4 7.4 0 1 1 20 11.4z"/></svg>
              Solicitar pelo WhatsApp
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
            <small>© 2025 Andressa Freire Viana. Todos os direitos reservados.</small>
            <small>Pastinha Médica · Currículo médico · Residência médica</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
