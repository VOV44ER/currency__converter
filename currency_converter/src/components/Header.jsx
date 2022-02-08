import React from 'react';
import 'bulma';

export default function Header({ currency }) {
  const usd = currency.rates.USD;
  const eur = currency.rates.EUR;

  return (
    <nav className="level has-background-grey-lighter">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading is-size-2">USD $:</p>
          <p className="title">{usd}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading is-size-2">Euro €:</p>
          <p className="title">{eur}</p>
        </div>
      </div>
    </nav>
  )
}
