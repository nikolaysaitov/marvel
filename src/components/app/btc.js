import React, { useState, useEffect } from 'react';

function BitcoinRate() {
  const [rate, setRate] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const data = await response.json();
      setRate(data.bpi.USD.rate_float);
    }
    fetchData();
  }, []);
  return (
    <div>
      {rate ? `1 BTC = $${rate}` : 'Loading...'}
    </div>
  );
}

export default BitcoinRate;