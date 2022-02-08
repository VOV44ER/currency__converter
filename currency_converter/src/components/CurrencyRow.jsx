import React from "react";
import './CurrencyRow.scss';


export default function Converter({ selected, onChangeCurrency, onChangeAmount, amount }) {


  return (
    <div className="converter">
      <input
        className="input"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={onChangeAmount}
      />
        <div className="select">
          <select value={selected} onChange={onChangeCurrency}>
            <option value={'USD'}>USD</option>
            <option value={'EUR'}>EUR</option>
            <option value={'UAH'}>UAH</option>
          </select>
        </div>
    </div>
  );
}
