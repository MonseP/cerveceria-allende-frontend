

import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (

      <div className="form-login">

                      <div className="home_login">
                          <h3>Iniciar sesión</h3>


                          <hr className="linea"/>
                          <div className="form">
                              <form>
                                  <p>Tu email:</p>
                                  <input className="input" name="email"  type="text" placeholder="allende@fixter.com"/>
                                  <br/>    <br/>
                                  <p>Tu contraseña:</p>

                                  <input className="input" name="password"  type="password" placeholder="********"/>

                                  <button type="submit" className="button-login">Iniciar</button>
                              </form>
                          </div>
                          <p className="contra-olvidada">¿Has olvidado tu contraseña? <a href="">Recuperarla aquí</a></p>


                      </div>
                      </div>


    );
  }
}

export default Login;
