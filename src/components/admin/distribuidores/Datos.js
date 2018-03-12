import React from 'react';
import './Distribuidor.css';


export const  Datos = () => {

    return (


<div className="container">
  <form>
    <ul className="flex-outer">
      <li>
        <label for="first-name">Nombre:</label>
        <input type="text" id="first-name" placeholder="Juan Pérez"/>
      </li>
      <li>
        <label for="last-name">Dirección:</label>
        <input type="text" id="address" placeholder="Calle,colonia,número"/>
      </li>
      <li>
        <label for="estado">RFC: </label>
        <input type="text" id="estado" placeholder="CUPU800825569"/>
      </li>
      <li>
        <label for="estado">Email: </label>
        <input type="email" id="email" placeholder="juan@fixter.com"/>
      </li>
    </ul>
  </form>
</div>


    );
}

export default Datos;
