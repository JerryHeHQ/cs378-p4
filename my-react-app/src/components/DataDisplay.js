import React from 'react';

import DataDisplayPrice from './DataDisplayPrice';
import DataDisplayCurrent from './DataDisplayCurrent';
import DataDisplayOrders from './DataDisplayOrders';

const DataDisplay = ({ dataDisplayType }) => {
  if (dataDisplayType === "dataDisplayPrice") {
    return <DataDisplayPrice />
  }
  if (dataDisplayType === "dataDisplayCurrent") {
    return <DataDisplayCurrent />
  }
  if (dataDisplayType === "dataDisplayOrders") {
    return <DataDisplayOrders />
  }

  return (
    <div className='row' id='data-display-row'>
      <div className='col' id='data-display-col'>
        {dataDisplayType}
      </div>
    </div>
  );
};

export default DataDisplay;