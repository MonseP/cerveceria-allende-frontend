import React, { Component } from 'react';
import { TimelineChart } from 'ant-design-pro/lib/Charts';
import './Proyeccion.css';

const chartData = [];
for (let i = 0; i < 20; i += 1) {
  chartData.push({
    x: (new Date().getTime()) + (1000 * 60 * 30 * i),
    y1: Math.floor(Math.random() * 100) + 1000,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}


class ChartPro extends React.Component {


  render() {
    return (
      <div className="chart-proyeccion">
      <TimelineChart
       
          data={chartData}
          titleMap={{ y1: '2017', y2: '2018' }}
        />

         </div>

    );
  }
}

export default ChartPro;
