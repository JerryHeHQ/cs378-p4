import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Title from './components/Title';
import SearchBar from './components/SearchBar';
import DataSelector from './components/DataSelector';
import DataDisplay from './components/DataDisplay';

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
          mainKey: 721003,
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
}

function onSearch(searchTerm) {
}


const App = () => {
  const [dataDisplayType, setDataDisplayType] = useState("No Data");

  function changeDataDisplayType(newDataDisplayType) {
    setDataDisplayType(newDataDisplayType)
  }

  return (
    <div className='row' id='main-row'>
      <div className='col' id='main-col'>

        <Title/>

        <SearchBar onSearch={onSearch}/>
        
        <DataSelector changeDataDisplayType={changeDataDisplayType}/>

        <DataDisplay dataDisplayType={dataDisplayType}/>

      </div>
    </div>
  );
};

export default App;