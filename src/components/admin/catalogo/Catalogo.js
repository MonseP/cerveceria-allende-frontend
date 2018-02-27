import React from 'react';
import { Card, Col, Row } from 'antd';
import CatalogoDos from './CatalogoDos';
import ModalCatalogo from './ModalCatalogo';
import './Catalogo.css';

export const Catalogo = () => {

    return (

<div  className="catalogo-back">
      <div style={{ padding: '30px' , width:'900px'}}>
      <Row gutter={16} >
        <Col span={8} >
          <Card title="Brown Ale" bordered={true}  style={{ borderColor: '#bcbcba'}}>
            <div className="hover-bio-wrapper">
            <div className="hover-bio">
            <figure className="hover-bio">
            <img src="http://cerveceriaallende.mx/wp-content/uploads/2014/08/Cerveza-Allende-Brown.png"/>
            <figcaption>
              <h3>Red Label</h3>
            <p>Tiene características maltosas,notas el caramelo y chocolate con nuez.</p>
            </figcaption>
            </figure>
            </div>
            </div>
          </Card>
        </Col>

        <Col span={8} >
          <Card title="Agave Lager" bordered={true}  style={{ borderColor: '#bcbcba'}}>
            <div className="hover-bio-wrapper">
            <div className="hover-bio">
            <figure className="hover-bio">
            <img src="http://cerveceriaallende.mx/wp-content/uploads/2014/08/Agave1.png"/>
            <figcaption>
              <h3>Green Label</h3>
            <p>Tiene características maltosas,notas el caramelo y chocolate con nuez.</p>
            </figcaption>
            </figure>
            </div>
            </div>
          </Card>
        </Col>
        <Col span={8} >
          <Card title="Golden Ale" bordered={true}  style={{ borderColor: '#bcbcba'}}>
            <div className="hover-bio-wrapper">
            <div className="hover-bio">
            <figure className="hover-bio">
            <img src="http://cerveceriaallende.mx/wp-content/uploads/2016/02/GoldenAleFinal2.png"/>
            <figcaption>
              <h3>Yellow Label</h3>
            <p>Tiene características maltosas,notas el caramelo y chocolate con nuez.</p>
            </figcaption>
            </figure>
            </div>
            </div>
          </Card>
        </Col>


      </Row>
    </div>

    <CatalogoDos/>
    <ModalCatalogo/>
  </div>







    );
}
export default Catalogo;
