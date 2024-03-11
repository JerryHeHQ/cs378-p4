import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Title from './components/Title';
import SearchBar from './components/SearchBar';
import DataDisplay from './components/DataDisplay';
import FertilizerSelector from './components/FertilizerSelector';
import nameToIdMap from './constants/nameToIdMap';

const App = () => {
  // This is either a message to the user or the name of the item.
  var startItemName = "Organic Fertilizer"
  const [message, setMessage] = useState("Loading...");
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    changeMessage(startItemName)
  }, []);

  function onSearch(searchTerm) {
    if (!changeMessage(searchTerm)) {
      setMessage("Error: Item Not Found");
    }
  }

  function changeMessage(newMessage) {
    if (message === newMessage) {
      return;
    }
    setMessage(newMessage);
    return changeItemId(newMessage);
  }

  function changeItemId(itemName) {
    var newItemId = nameToIdMap.get(itemName.toLowerCase());
    newItemId !== undefined ? setItemId(newItemId) : setItemId(null);
    return newItemId !== undefined;
  }

  return (
    <div className='row' id='main-row'>
      <div className='col' id='main-col'>

        <Title/>

        <SearchBar onSearch={onSearch}/>
        
        <FertilizerSelector changeMessage={changeMessage} />

        {/* <DataDisplay message={message} itemId={itemId} changeMessage={changeMessage}/> */}
        <DataDisplay itemId={itemId} message={message} changeMessage={changeMessage}/>

      </div>
    </div>
  );
};

export default App;