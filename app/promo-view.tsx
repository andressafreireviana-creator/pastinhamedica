import { referralPromo } from "./promo";
import { whatsappHref, waIcon } from "./chrome";

// Bloco completo da campanha de indicação.
export function PromoBand({
  id = "indicacao",
  className = "",
  compact = false,
}: {
  id?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={`promo-band reveal ${className}`.trim()} id={id}>
      <div className="promo-band-badge" aria-hidden="true">
        <b>{referralPromo.percent}%</b>
        <span>OFF</span>
      </div>
      <div className="promo-band-txt">
        <span className="promo-band-kicker">Indique e ganhe · {referralPromo.periodo}</span>
        <b>{referralPromo.titulo}</b>
        <ul className="promo-band-list">
          <li><strong>Quem indica:</strong> ganha {referralPromo.percent}% de desconto.</li>
          <li><strong>Quem é indicado:</strong> também ganha {referralPromo.percent}% de desconto.</li>
        </ul>
        {!compact && <span className="promo-band-how">{referralPromo.comoUsar}</span>}
      </div>
      <a className="btn btn-hook" href={whatsappHref("Indicação")} target="_blank" rel="noopener noreferrer">
        {waIcon}
        Quero usar o desconto
      </a>
    </div>
  );
}
