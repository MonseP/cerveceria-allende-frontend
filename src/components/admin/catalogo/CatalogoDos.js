import React from 'react';
import { Card, Col, Row } from 'antd';


const { Meta } = Card;

export const CatalogoDos = () => {

    return (
      <div style={{ background: '#fdfdfa', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="IPA" bordered={true}  style={{ borderColor: '#bcbcba'}} >
            <div className="hover-bio-wrapper">
            <div className="hover-bio">
            <figure className="hover-bio">
            <img src="http://cerveceriaallende.mx/wp-content/uploads/2016/02/BrownAleFinal2.png"/>
            <figcaption>
              <h3>Orange Label</h3>
            <p>Tiene características maltosas,notas el caramelo y chocolate con nuez.</p>
            </figcaption>
            </figure>
            </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={true}  style={{ borderColor: '#bcbcba'}} >Card content</Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={true}  style={{ borderColor: '#bcbcba'}} >Card content</Card>
        </Col>

      </Row>
    </div>


    );
}
export default CatalogoDos;
