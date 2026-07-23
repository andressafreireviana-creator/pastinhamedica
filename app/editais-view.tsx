import { editais } from "./editais-data";
import { whatsappHref, waIcon } from "./chrome";

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

// Caixa de urgência (acolhedora) usada na home e na página /editais.
export function EditaisCta() {
  return (
    <div className="editais-cta reveal">
      <div className="ec-txt">
        <b>Quer a pasta pronta com antecedência?</b>
        <span>Comece agora, no seu ritmo, e chegue tranquilo à inscrição.</span>
      </div>
      <a className="btn btn-hook" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
        {waIcon}
        Quero organizar meu currículo
      </a>
    </div>
  );
}

// Lista completa (cards com datas, status e link oficial) — página /editais.
export function EditaisList() {
  return (
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
  );
}

// Resumo compacto (chips com os nomes) — home, para não alongar a página.
export function EditalChips() {
  return (
    <ul className="edital-chips reveal" aria-label="Instituições acompanhadas">
      {editais.map((e) => (
        <li key={e.n}>{e.n}</li>
      ))}
    </ul>
  );
}
