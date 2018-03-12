import React from 'react';
import {Icon } from 'antd';
import {Route, Switch} from 'react-router-dom';
import LoginHome from './components/login/LoginHome';
import AdminHome from './components/admin/administrador/AdminHome';
import DistriHome from './components/admin/distribuidores/DistriHome';
import DistriDetalle from './components/admin/distribuidores/detalle/DistriDetalle';
import CatalogoHome from './components/admin/catalogo/CatalogoHome';
import Vendidas from './components/admin/distribuidores/detalle/charts/Vendidas';
import VentasHome from './components/admin/ventas/VentasHome';
import ProyeccionesHome from './components/admin/proyecciones/ProyeccionesHome';
const Routes = () => (
    <Switch>
        <Route exact path="/" component={LoginHome}/>
        <Route path="/admin" component={AdminHome}/>
        <Route path="/distribuidores" component={DistriHome}/>
        <Route path="/detalle" component={DistriDetalle}/>
        <Route path="/catalogo" component={CatalogoHome}/>
        <Route path="/vendidas" component={Vendidas}/>
        <Route path="/ventas" component={VentasHome}/>
        <Route path="/proyeccion" component={ProyeccionesHome}/>




        <Route render={() => <h3> Se está construyendo <Icon type="loading" />  </h3>  } />



    </Switch>

);

export default Routes;
