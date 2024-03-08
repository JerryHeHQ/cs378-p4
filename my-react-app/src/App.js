import React, { useEffect } from 'react';

const App = () => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://na-trade.naeu.playblackdesert.com/Trademarket/GetMarketPriceInfo',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'BlackDesert',
          },
          body: JSON.stringify({
            keyType: 0,
            mainKey: 10210,
            subKey: 0,
          }),
        }
      );
  
      console.log('Full Response:', response);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('API Data:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <h1>Your React App</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default App;