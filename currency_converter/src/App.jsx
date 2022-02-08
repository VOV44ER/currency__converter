import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CurrencyRow from './components/CurrencyRow';

import './App.scss';

import { getCurrency } from './api/api';

const App = () => {
  const [Currency, setCurrency] = useState();
  const [fromCurrency, setFromCurrency] = useState('UAH');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [amountFromCurrency, setAmountFromCurrency] = useState(true);
  const [rate, setRate] = useState(1);

  let fromAmount, toAmount;

  if(amountFromCurrency) {
    fromAmount = amount;
    toAmount = amount * rate;
  } else {
    toAmount = amount
    fromAmount = amount / rate;
  }

  useEffect(() => {
    getCurrency(`?base=${fromCurrency}`)
    .then(result => {
      setCurrency(result);
      setRate(result.rates[toCurrency])
    })
  }, [fromCurrency, toCurrency])

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value)
    setAmountFromCurrency(true);
  }

  const handleToAmountChange = (e) => {
    setAmount(e.target.value)
    setAmountFromCurrency(false);
  }

  return (
    <div className='App'>
    {Currency && <Header currency={Currency} choosen={fromCurrency} />}
    <div className='App__currency'>
      <CurrencyRow
        selected={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className='equals'>=</div>
      <CurrencyRow
        selected={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
      </div>
    </div>
  )
};

export default App;
