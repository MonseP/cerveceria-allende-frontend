import React from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
import './Nav.css';



class NavHome extends React.Component {
    render (){
        return (
                      <div className="nav-container">
                      <nav>
                        <ul>
                          <li><a href="">Inicio</a></li>
                            <div className="dropdown">
                            <span> <li> <a href="">:</a> </li></span>
                            <div className="dropdown-content">
                              <p><a href="">Cerrar sesión</a></p>
                            </div>
                          </div>
                        </ul>
                      </nav>

                      </div>
        );
    }
}
export default NavHome;
