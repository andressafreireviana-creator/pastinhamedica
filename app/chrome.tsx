import Link from "next/link";

export const phoneNumber = "5514991457503";

type PlanName = "Essencial" | "Avançado" | "Premium" | "Serviços adicionais";

export function whatsappHref(plan?: PlanName) {
  const message =
    plan === "Serviços adicionais"
      ? "Olá, Andressa. Tenho interesse nos serviços adicionais para fortalecer minha apresentação profissional."
      : plan
      ? `Olá, Andressa. Tenho interesse no Plano ${plan} para organizar meu currículo para residência médica.`
      : "Olá, Andressa. Quero organizar meu currículo para residência médica.";

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export const waIcon = (
  <svg className="ico-wa" viewBox="0 0 24 24"><path d="M20 11.4a7.4 7.4 0 0 1-10.9 6.6L4 19.4l1.4-4.1A7.4 7.4 0 1 1 20 11.4z"/></svg>
);

export function Brandmark() {
  return (
    <span className="brandmark" aria-hidden="true">
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="31" fill="#2F5D62" />
        <path d="M15 43.8 V25.8 a3.2 3.2 0 0 1 3.2 -3.2 H29 l3.5 3.6 H45.8 a3.2 3.2 0 0 1 3.2 3.2 V43.8 a3.2 3.2 0 0 1 -3.2 3.2 H18.2 A3.2 3.2 0 0 1 15 43.8 Z" fill="none" stroke="#F4F6F7" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="46.5" cy="45.5" r="9.5" fill="#E4127A" />
        <path d="M42.3 45.7 l2.9 2.9 L51 42.6" fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

// base = "" nas âncoras da própria home (#recebe); "/" nas páginas internas (/#recebe).
export function SiteHeader({ base = "" }: { base?: string }) {
  const homeHref = base === "" ? "#top" : "/";
  return (
    <header className="site-header" id="siteHeader">
      <div className="container header-inner">
        <Link className="wordmark" href={homeHref} aria-label="Pastinha Médica, início">
          <Brandmark />
          <span className="wordmark-text">
            <b>Pastinha&nbsp;Médica</b>
            <span className="wordmark-by">Por Andressa Freire Viana</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Navegação principal">
          <Link href={`${base}#recebe`}>O que você recebe</Link>
          <Link href={`${base}#como-funciona`}>Como funciona</Link>
          <Link href="/editais">Editais</Link>
          <Link href={`${base}#planos`}>Planos</Link>
          <Link href={`${base}#institucional`}>Quem sou</Link>
        </nav>
        <div className="header-cta">
          <a className="btn btn-hook btn-sm" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            {waIcon}
            <span className="lbl">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-name">Pastinha Médica</div>
            <div className="footer-tagline">Organização documental e elaboração de currículos médicos para residência, conforme a banca. Por Andressa Freire Viana.</div>
          </div>
          <a className="btn btn-hook" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
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
        <nav className="footer-links" aria-label="Páginas do site">
          <Link href="/curriculo-para-residencia-medica">Currículo para residência médica</Link>
          <Link href="/editais">Editais</Link>
          <Link href="/duvidas">Dúvidas</Link>
        </nav>
        <div className="footer-bottom">
          <small>© 2026 Andressa Freire Viana. Todos os direitos reservados.</small>
          <small>Pastinha Médica · Currículo médico · Residência médica</small>
        </div>
      </div>
    </footer>
  );
}

export function WaFloat() {
  return (
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
  );
}
