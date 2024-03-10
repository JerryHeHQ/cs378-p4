import React from 'react';
import './FertilizerSelector.css'

function changeSelectorColors(isSelected1, isSelected2, isSelected3) {
  var selectedColor = '#77DD77'
  var unselectedColor = '#F0F0F0'
  document.getElementById("data-selector-inorganic-fertilizer-col").style.backgroundColor = isSelected1 ? selectedColor : unselectedColor
  document.getElementById("data-selector-organic-fertilizer-col").style.backgroundColor = isSelected2 ? selectedColor : unselectedColor
  document.getElementById("data-selector-byproduct-fertilizer-col").style.backgroundColor = isSelected3 ? selectedColor : unselectedColor
}

const FertilizerSelector = ({ changeMessage }) => {
  return (
    <div className='row' id='data-selector-row'>

      <div
        className='col data-selector-col'
        id='data-selector-inorganic-fertilizer-col'
        onClick={() => {
          changeSelectorColors(true, false, false);
          changeMessage("inorganic fertilizer");
          }}>

        <div className='data-selector-text'>
          Inorganic Fertilizer
        </div>
      </div>

      <div 
        className='col data-selector-col' 
        id='data-selector-organic-fertilizer-col'
        onClick={() => {
          changeSelectorColors(false, true, false);
          changeMessage("organic fertilizer");
          }}>

        <div className='data-selector-text'>
          Organic Fertilizer
        </div>
      </div>

      <div
        className='col data-selector-col'
        id='data-selector-byproduct-fertilizer-col'
        onClick={() => {
          changeSelectorColors(false, false, true);
          changeMessage("byproduct fertilizer");
          }}>

        <div className='data-selector-text'>
          Byproduct Fertilizer
        </div>
      </div>

    </div>
  );
};

export default FertilizerSelector;





