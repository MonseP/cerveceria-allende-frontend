import React, { Component } from 'react';
import ChartVentas from './ChartVentas';
import MenuAdmin from '../administrador/MenuAdmin';
import '../administrador/Admin.css';
import './Ventas.css';






class VentasHome extends React.Component {

  render() {
      return (



                          <div className="home-prove">
                            <div className="admin-home">
                              <h3> Administrador</h3>

                            </div>
                                    <MenuAdmin/>
                            <div className="home-ventas">
                              <ChartVentas/>
                              </div>
                          </div>





      );
  }
}


export default VentasHome;
