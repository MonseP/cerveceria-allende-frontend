import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import Vendidas from './charts/Vendidas.js';
import { Radio } from 'antd';
const TabPane = Tabs.TabPane;

  class TabDetalle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mode: 'top',
      };
    }
    handleModeChange = (e) => {
      const mode = e.target.value;
      this.setState({ mode });
    }
    render() {
      const { mode } = this.state;
      return (
        <div>
          <div className="tab-detalle">
          <Tabs
            defaultActiveKey="1"
            tabPosition={mode}
            style={{ height:600, width:800}}
          >
            <TabPane tab="Cervezas más vendidas" key="1"> <Vendidas/>   </TabPane>
            <TabPane tab="Mejores clientes" key="2">   Content of tab 2</TabPane>
            <TabPane tab="Días de mayor demanda" key="3">Content of tab 3</TabPane>
            <TabPane tab="Ventas del mes" key="4">Content of tab 4</TabPane>



          </Tabs>
          </div>
        </div>
      );
    }
  }


export default TabDetalle;
