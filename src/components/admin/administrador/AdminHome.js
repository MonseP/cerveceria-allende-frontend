import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import MenuAdmin from './MenuAdmin';
import DistriHome from '../distribuidores/DistriHome';
import 'antd/dist/antd.css'
import './Admin.css';



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class AdminHome extends React.Component {

  render() {
      return (



                  <div className="home-prove">
                    <div className="admin-home">
                  

                      <h3> Administrador</h3>

                    </div>


                    <MenuAdmin/>
                        <DistriHome/>

                  </div>


      );
  }
}


export default AdminHome;
