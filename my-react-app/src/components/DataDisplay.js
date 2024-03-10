import React, { useState, useEffect } from 'react';

const DataDisplay = ({ message, itemId, changeMessage }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
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
              mainKey: itemId,
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
        setData(data.resultMsg)
      } catch (error) {
        console.error('Error fetching data:', error.message);
        changeMessage('Error: Could Not Fetch Data')
      }
    };
    if (itemId !== null) {
      setData(null)
      fetchData()
    }
  }, [itemId])

  return (
    <div className='row' id='data-display-row'>
      <div className='col' id='data-display-col'>
        {titleCap(message)}
        {data}
      </div>
    </div>
  ); 



};

function titleCap(inputString) {
  if (inputString && inputString.length > 0) {
    return inputString
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  } else {
    return inputString;
  }
}


export default DataDisplay;