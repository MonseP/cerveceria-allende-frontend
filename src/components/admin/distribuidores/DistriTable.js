import React, { Component } from 'react';
import DistriSearch from './DistriSearch';
import {Link, NavLink} from 'react-router-dom';
import { Table, Input, Button, Icon } from 'antd';


const columns = [{
  title: 'Nombre',
  dataIndex: 'name',
  render: (text,m) => <NavLink to="/detalle/id"><p style={{color:'#1890ff', textDecoration: 'underline'}}>{text}</p></NavLink>,

}, {
  title: 'Última compra',
  dataIndex: 'compra',
},{
  title: 'Producto más vendido',
  dataIndex: 'product',

},{
  title: 'Compra promedio',
  dataIndex: 'dinero',
}

];
const data = [{
  key: '1',
  id: "1",
  name: 'Montserrat',
  compra: "January 15",
  product: 'Artesanal Beer 3',
  dinero: '$200.00',
}, {
 key: '2',
 id:"1",
 name: 'John',
compra:"January 16",
  product: 'Artesanal Beer 3',
 dinero: '$200.00',
}, {
 key: '2',
 id:"1",
 name: 'John',
compra:"January 16",
  product: 'Artesanal Beer 3',
 dinero: '$200.00',
}, {
 key: '2',
 id:"1",
 name: 'John',
compra:"January 16",
  product: 'Artesanal Beer 3',
 dinero: '$200.00',
}];


class DistriTable extends React.Component {

          render() {

            return (
              <div>
          <DistriSearch/>
          <br />
          <Table id="compra-actual" columns={columns} dataSource={data} size="small" />

        </div>
      );
  }
}


export default DistriTable;
