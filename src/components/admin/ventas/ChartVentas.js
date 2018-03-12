import React, { Component } from 'react';
import { Bar } from 'ant-design-pro/lib/Charts';
import './Ventas.css';

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}$`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}



class ChartVentas extends React.Component {


  render() {
    return (
<div  className="chart">
      <Bar
    
          title="Ventas"
          data={salesData}
        />

</div>

    );
  }
}

export default ChartVentas;
