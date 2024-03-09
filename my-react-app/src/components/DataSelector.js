import React from 'react';


function changeSelectorColors(selectorColor1, selectorColor2, selectorColor3) {
  document.getElementById("data-selector-price-col").style.backgroundColor = selectorColor1 ? 'green' : 'red'
  document.getElementById("data-selector-current-col").style.backgroundColor = selectorColor2 ? 'green' : 'red'
  document.getElementById("data-selector-orders-col").style.backgroundColor = selectorColor3 ? 'green' : 'red'
}

const DataSelector = ({changeDataDisplayType}) => {

  return (
    <div className='row' id='data-selector-row'>
      <div 
        className='col data-selector-col' 
        id='data-selector-price-col'
        onClick={() => {
          changeDataDisplayType("dataDisplayPrice")
          changeSelectorColors(true, false, false)
        }}>
        <div className='data-selector-text'>
          Price
        </div>
      </div>
      <div
        className='col data-selector-col'
        id='data-selector-current-col'
        onClick={() => {
          changeDataDisplayType("dataDisplayCurrent")
          changeSelectorColors(false, true, false)
        }}>
        <div className='data-selector-text'>
          Current
        </div>
      </div>
      <div
        className='col data-selector-col'
        id='data-selector-orders-col'
        onClick={() => {
          changeDataDisplayType("dataDisplayOrders")
          changeSelectorColors(false, false, true)
        }}>
        <div className='data-selector-text'>
          Orders
        </div>
      </div>
    </div>
  );
};

export default DataSelector;





