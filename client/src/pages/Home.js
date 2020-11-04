import React, {useEffect, useState} from 'react';

const usePrices = () => {
    const [price, setPrices] = useState([])
  
    useEffect(() => {
      const fetchPrices = async () => {
        const res = await fetch('https://finnhub.io/api/v1/quote?symbol=tsla&token=buh9us748v6seska58a0')
        const data = await res.json()      
        setPrices(data)
      }
      fetchPrices();
    }, [])
    return price
  }

  export default () => {
    const prices = usePrices()
    console.log(prices)
    return (
      <div className="App">
      <h1>Welcome to whatIfSTOCK</h1>
      <h2>Todays recap of Tesla - TLSA</h2>
        <ul>
          <li>Open Price of the day: {prices.o}</li>
          <li>High price of the day: {prices.h}</li>
          <li>Low price of the day: {prices.l}</li>
          <li><h4>Current price: {prices.c}</h4></li>
          <li>Previous close price: {prices.pc}</li>
        </ul>
      </div>
    );
  }