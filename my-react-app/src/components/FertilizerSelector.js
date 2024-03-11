import React, { useEffect } from 'react';
import './FertilizerSelector.css'

const FertilizerSelector = ({ changeMessage, changeSelectorColors }) => {

  function changeSelectorColors(isSelected1, isSelected2, isSelected3) {
    var selectedColor = '#77DD77'
    var unselectedColor = '#F0F0F0'
    document.getElementById("fertilizer-selector-inorganic-fertilizer-col").style.backgroundColor = isSelected1 ? selectedColor : unselectedColor
    document.getElementById("fertilizer-selector-organic-fertilizer-col").style.backgroundColor = isSelected2 ? selectedColor : unselectedColor
    document.getElementById("fertilizer-selector-byproduct-fertilizer-col").style.backgroundColor = isSelected3 ? selectedColor : unselectedColor
  }

  useEffect(() => {
    changeSelectorColors(false, true, false);
  }, [])

  return (
    <div className='row' id='fertilizer-selector-row'>

      <div
        className='col fertilizer-selector-col'
        id='fertilizer-selector-inorganic-fertilizer-col'
        onClick={() => {
          changeSelectorColors(true, false, false);
          changeMessage("inorganic fertilizer");
          }}>

        <div className='fertilizer-selector-text'>
          Inorganic Fertilizer
        </div>
      </div>

      <div 
        className='col fertilizer-selector-col' 
        id='fertilizer-selector-organic-fertilizer-col'
        onClick={() => {
          changeSelectorColors(false, true, false);
          changeMessage("organic fertilizer");
          }}>

        <div className='fertilizer-selector-text'>
          Organic Fertilizer
        </div>
      </div>

      <div
        className='col fertilizer-selector-col'
        id='fertilizer-selector-byproduct-fertilizer-col'
        onClick={() => {
          changeSelectorColors(false, false, true);
          changeMessage("byproduct fertilizer");
          }}>

        <div className='fertilizer-selector-text'>
          Byproduct Fertilizer
        </div>
      </div>

    </div>
  );
};

export default FertilizerSelector;





