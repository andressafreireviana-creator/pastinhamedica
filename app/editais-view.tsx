import { editais, editalStatus, formatInscricao, formatProva, type EditalStatus } from "./editais-data";
import { whatsappHref, waIcon } from "./chrome";

function statusPill(status: EditalStatus) {
  switch (status) {
    case "Inscrição em breve":
      return "rose";
    case "Inscrições abertas":
      return "ok";
    case "Inscrições encerradas":
      return "muted";
    default:
      return "ok";
  }
}

// Inscrições abertas primeiro, depois as próximas e, por fim, as encerradas.
const statusOrder: Record<EditalStatus, number> = {
  "Inscrições abertas": 0,
  "Inscrição em breve": 1,
  "A confirmar": 2,
  "Inscrições encerradas": 3,
};

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
  const items = editais
    .map((e) => ({ e, status: editalStatus(e) }))
    .sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

  return (
    <div className="editais-list reveal">
      {items.map(({ e, status }) => {
        const premium = e.t.startsWith("Premium");
        return (
          <div className="edital-card" key={e.n}>
            <div className="ec-top">
              <b>{e.n}</b>
              <span className={`pill ${premium ? "gold" : "sage"}`}>{e.t}</span>
            </div>
            <dl className="ec-dates">
              <div><dt>Inscrição</dt><dd>{formatInscricao(e)}</dd></div>
              <div><dt>Prova</dt><dd>{formatProva(e)}</dd></div>
            </dl>
            {e.obs && <p className="ec-note">{e.obs}</p>}
            <div className="ec-foot">
              <span className={`pill ${statusPill(status)}`}>{status}</span>
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
