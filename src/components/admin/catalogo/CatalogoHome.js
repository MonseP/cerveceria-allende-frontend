import React, { Component } from 'react';
import Catalogo from './Catalogo';
import MenuAdmin from '../administrador/MenuAdmin';
import '../administrador/Admin.css';
import './Catalogo.css';

class CatalogoHome extends Component {
    render() {
        return (


                      <div>
                        <div className="home-prove">
                          <div className="admin-home">
                            <h3> Administrador</h3>

                          </div>
                          <MenuAdmin/>

                          <div className="card-catalogo">
                            <div className="catalogo-back">



                            <Catalogo/>


                              </div>


                          </div>
                            </div>
                              </div>


        );
    }
}

export default CatalogoHome;
