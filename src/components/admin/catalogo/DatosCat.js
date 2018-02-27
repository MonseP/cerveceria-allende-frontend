import React from 'react';
import Subir from './Subir';
import './Catalogo.css';


export const  DatosCat = () => {

    return (


<div className="container">
  <form>
    <ul className="flex-outer">
      <li>
        <label for="name">Producto:</label>
        <input type="text" id="first-name" placeholder="Cerveza"/>
      </li>
      <li>
        <label for="desc">Descripción :</label>
        <input type="text" id="last-name" placeholder="Tiene características... "/>
      </li>
      <li>
        <label for="precio">Precio: </label>
        <input type="number" id="precio" placeholder="$100.00"/>
      </li>
      <li>
        <label for="precio">Subir archivo: </label>
  <p>    <Subir/></p>


      </li>

    </ul>
  </form>


</div>


    );
}

export default DatosCat;
