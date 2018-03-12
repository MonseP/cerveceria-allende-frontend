import React, { Component } from 'react';
import ChartPro from './ChartPro';
import MenuAdmin from '../administrador/MenuAdmin';
import '../administrador/Admin.css';
import './Proyeccion.css';






class VentasHome extends React.Component {

  render() {
      return (



                          <div className="home-prove">
                            <div className="admin-home">
                              <h3>Administrador</h3>

                            </div>
                                    <MenuAdmin/>

                              <ChartPro/>
                            
                          </div>





      );
  }
}


export default VentasHome;
