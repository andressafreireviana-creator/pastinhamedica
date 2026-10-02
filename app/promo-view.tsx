import { referralPromo } from "./promo";
import { whatsappHref, waIcon } from "./chrome";

// Faixa curta no topo (hero): leva até o bloco completo da campanha.
export function PromoStrip({ href = "#indicacao" }: { href?: string }) {
  return (
    <a className="promo-strip" href={href}>
      <span className="promo-strip-tag">{referralPromo.percent}% OFF</span>
      <span>Outubro, novembro e dezembro: desconto para quem indica <b>e</b> para quem é indicado</span>
    </a>
  );
}

// Bloco completo da campanha de indicação.
export function PromoBand({ id = "indicacao" }: { id?: string }) {
  return (
    <div className="promo-band reveal" id={id}>
      <div className="promo-band-badge" aria-hidden="true">
        <b>{referralPromo.percent}%</b>
        <span>de desconto</span>
      </div>
      <div className="promo-band-txt">
        <span className="promo-band-kicker">Indique e ganhe · {referralPromo.periodo}</span>
        <b>{referralPromo.titulo}</b>
        <ul className="promo-band-list">
          <li><strong>Quem indica:</strong> ganha {referralPromo.percent}% de desconto.</li>
          <li><strong>Quem é indicado:</strong> também ganha {referralPromo.percent}% de desconto.</li>
        </ul>
        <span className="promo-band-how">{referralPromo.comoUsar}</span>
      </div>
      <a className="btn btn-hook" href={whatsappHref("Indicação")} target="_blank" rel="noopener noreferrer">
        {waIcon}
        Quero usar o desconto
      </a>
    </div>
  );
}
