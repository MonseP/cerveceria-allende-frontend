import React, { Component } from 'react';
import { Card } from 'antd';
import numeral from 'numeral';
import { Row, Col, Icon, Tooltip } from 'antd';
import { Pie, yuan,Bar,ChartCard , Field } from 'ant-design-pro/lib/Charts';
import './Vendidas.css';


const salesPieData = [
  {
    x: 'Brown ale',
    y: 40,
  },
  {
    x: 'IPA',
    y: 40,
  },

    {
    x: 'Agave Lager',
    y: 20,
  },
];





class Vendidas extends Component {
    render() {
        return (
            <div className="home-vendidas">
            <div  className="vendidas">
                      <Pie
                  data={salesPieData}
                  height={294}

                     />
            </div>

            <Card style={{ width: 300 }} className="card" >
              <ul>
           <p id="uno"> <img src="http://cerveceriaallende.mx/wp-content/uploads/2014/08/Cerveza-Allende-Brown.png" alt=""/>Brown Ale 40% </p>
          <p id="dos"> <img src="http://cerveceriaallende.mx/wp-content/uploads/2015/06/IPA1.png" alt=""/>IPA 40% </p>
          <p id="tres"> <img src="http://cerveceriaallende.mx/wp-content/uploads/2014/08/AgaveFinal2.png" alt=""/>Agave Lager 20% </p>
              </ul>


            <ChartCard

    hasLegend
    title="Total :"
    subTitle="Total: "
    total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
    data={salesPieData}
    valueFormat={val => yuan(val)}
    height={294}


    />

    </Card>


            </div>




        );
    }
}

export default Vendidas;
