import React, { Component } from 'react';
import TabDetalle from './TabDetalle';
import CardDistri from './CardDistri';
import './Detalle.css';


class DistriDetalle extends Component {
    render() {
        return (

                      <div>
                        <div className="detalle-home">
                            <CardDistri/>
                          <TabDetalle/>



                        </div>


                         </div>



        );
    }
}

export default DistriDetalle;
