import React, { Component } from 'react';
import { Card } from 'antd';




class CardDistri extends Component {
    render() {
        return (

                      <div>
                        <div>
                          <Card
                          hoverable
                          style={{ width: 200 }}
                          cover={<img alt="example" src="https://www.cervezaartesanalmexicana.mx/images/brands/allende.jpg" />}
                          >
                          <b> <p>Dirección:Aquí</p></b>
                          <b> <p>RFC:123434</p></b>
                          <b> <p>Cajas vendidas: 290</p></b>
                          <b> <p>Cantidad vendida: $4976</p></b>
                          <b> <p>Stock: 20000 </p></b>
                          <b><p>Última venta: 15 Feb 2018 </p></b>
                          </Card>

                          </div>

                        </div>






        );
    }
}

export default CardDistri;
