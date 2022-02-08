import React from 'react';
import 'bulma';

export default function Header({ currency, choosen }) {
  const usd = currency.rates.USD;
  const eur = currency.rates.EUR;
  const uah = currency.rates.UAH;

  return (
    <nav className="level has-background-grey-lighter">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading is-size-2">{choosen === 'USD' ? 'UAH ₴:' : 'USD $:'}</p>
          <p className="title">{choosen === 'USD' ? uah : usd}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading is-size-2">Currency Exchange</p>
          <p className="title">{choosen}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading is-size-2">{choosen === 'EUR' ? 'UAH ₴:' : 'Euro €:'}</p>
          <p className="title">{choosen === 'EUR' ? uah : eur}</p>
        </div>
      </div>
    </nav>
  )
}
