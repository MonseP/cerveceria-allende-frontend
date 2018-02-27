import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './Admin.css';
import {Link, NavLink} from 'react-router-dom';
import { Menu, Icon } from 'antd';



class MenuAdmin extends React.Component {
  state = {
    mode: 'inline',
    theme: 'light',
  }

  render() {
    return (
      <div className="menu-admin">

        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <Menu.Item key="1">
          <Icon type="user" />
            <span className="span-menu"> <NavLink  className="span-menu" to="/admin">Distribuidores</NavLink></span>
          </Menu.Item>

          <Menu.Item key="2">
          <Icon type="area-chart" />
          <span className="span-menu"> <NavLink  className="span-menu" to="/ventas">Ventas</NavLink></span>
          </Menu.Item>

          <Menu.Item key="3">
          <Icon type="sync" />
            <span className="span-menu"> <NavLink  className="span-menu" to="/catalogo">Actualizar Catálogo</NavLink></span>
          </Menu.Item>




            <Menu.Item key="4">
            <Icon type="pie-chart" />
            <span className="span-menu"> <NavLink  className="span-menu" to="/proyeccion">Proyecciones</NavLink></span>
            </Menu.Item>

        </Menu>
      </div>
    );
  }
}

export default MenuAdmin;
