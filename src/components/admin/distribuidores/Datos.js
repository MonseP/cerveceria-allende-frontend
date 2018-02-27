import React from 'react';
import './Distribuidor.css';


export const  Datos = () => {

    return (


<div className="container">
  <form>
    <ul className="flex-outer">
      <li>
        <label for="first-name">Nombre:</label>
        <input type="text" id="first-name" placeholder="Nombre"/>
      </li>
      <li>
        <label for="last-name">Dirección:</label>
        <input type="text" id="last-name" placeholder="Dirección"/>
      </li>
      <li>
        <label for="estado">RFC: </label>
        <input type="text" id="estado" placeholder="RFC"/>
      </li>
    </ul>
  </form>
</div>


    );
}

export default Datos;
