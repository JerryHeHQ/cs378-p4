import React from 'react';
import './DataSelector.css'

function changeSelectorColors(isSelected1, isSelected2, isSelected3) {
  var selectedColor = '#DAA520'
  var unselectedColor = '#404040'
  // document.getElementById("data-selector-current-col").style.backgroundColor = isSelected1 ? selectedColor : unselectedColor
  document.getElementById("data-selector-current-col").style.borderColor = isSelected1 ? selectedColor : unselectedColor
  document.getElementById("data-selector-current-col").style.borderRightColor = isSelected1 ? selectedColor : unselectedColor
  document.getElementById("data-selector-price-col").style.borderColor = isSelected2 ? selectedColor : unselectedColor
  document.getElementById("data-selector-orders-col").style.borderColor = isSelected3 ? selectedColor : unselectedColor
}

const DataSelector = ({changeDataDisplayType}) => {

  return (
    <div className='row' id='data-selector-row'>
      <div
        className='col data-selector-col'
        id='data-selector-current-col'
        onClick={() => {
          changeDataDisplayType("dataDisplayCurrent")
          changeSelectorColors(true, false, false)
        }}>
        <div className='data-selector-text'>
          Current
        </div>
      </div>
      <div 
        className='col data-selector-col' 
        id='data-selector-price-col'
        onClick={() => {
          changeDataDisplayType("dataDisplayPrice")
          changeSelectorColors(false, true, false)
        }}>
        <div className='data-selector-text'>
          Price
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





