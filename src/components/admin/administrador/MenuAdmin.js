import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './Admin.css';
import FontAwesome from 'react-fontawesome';
import { Menu, Icon } from 'antd';
import {Link, NavLink} from 'react-router-dom';
const { SubMenu } = Menu;





class MenuAdmin extends React.Component {

  render() {
    return (
      <div className="menu-admin">
        <Menu
          mode="inline"

          >


  <div className="vertical-menu">
    <a className="active">Menú</a>
 <Link to="/admin" className="link"> <a> <Icon type="user" />  Distribuidores</a></Link>
  <Link to="/ventas"  className="link" >  <a>  <Icon type="area-chart" /> Ventas</a> </Link>
   <Link to="/catalogo"  className="link" > <a>   <Icon type="sync" /> Catálogo</a> </Link>
   <Link to="/proyeccion"  className="link">  <a> <Icon type="line-chart" /> Proyecciones</a> </Link>


            </div>
        </Menu>

      </div>
    );
  }
}

export default MenuAdmin;
