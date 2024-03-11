import React, { PureComponent, userState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



const GraphDisplay = ({ graphData }) => {
  if (graphData === null) {
    return null;
  }

  const tooltipStyle = {
    border: '1px solid #D0D0D0',
    borderRadius: '15px',
    backgroundColor: '#F0F0F0',
    padding: '10px',
    fontSize: 'small',
    fontWeight: 'bold',
    fill: 'black'
  };

  function getDomain() {
    var minPrice = Math.min(...graphData.map(entry => entry.price));
    var maxPrice = Math.max(...graphData.map(entry => entry.price));

    return [minPrice, maxPrice]
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={graphData}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis
          type="number"
          domain={getDomain()}
          tick={{ fontSize: 12, fill: 'black' }}
          tickFormatter={(tick) => {
            if (tick >= 1000) {
              return (tick / 1000).toFixed(1) + 'K';
            }
            return tick;
          }}
        />
        <YAxis
          dataKey="date"
          type="category"
          tick={{ fontSize: 12, fill: 'black' }}
        />
        <Tooltip
          formatter={(value, name, props) => [parseInt(value).toLocaleString(), '']}
          separator=''
          contentStyle={tooltipStyle}
        />
        <Bar
          dataKey="price"
          fill="#77DD77"  // Set the fill color for the bars
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default GraphDisplay;