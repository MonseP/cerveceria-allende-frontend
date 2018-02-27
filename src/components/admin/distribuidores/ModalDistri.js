import React, { Component } from 'react';
import { Modal, Button, Icon} from 'antd';
import Datos from './Datos';
import './Distribuidor.css';



class ModalDistri extends React.Component {

      state = { visible: false }
   showModal = () => {
     this.setState({
       visible: true,
     });
   }
   handleOk = (e) => {
     console.log(e);
     this.setState({
       visible: false,
     });
   }
   handleCancel = (e) => {
     console.log(e);
     this.setState({
       visible: false,
     });
   }
   render() {
     return (
       <div  className="modal-prove">
         <Button  type="primary" onClick={this.showModal}><Icon type="plus" /></Button>

         <Modal
           title="Agregar nuevo distribuidor"
           visible={this.state.visible}
           onOk={this.handleOk}
           onCancel={this.handleCancel}
           okText="Aceptar"
           cancelText="Cancelar"
         >
          <Datos/>


         </Modal>
       </div>
     );
   }
 }


export default ModalDistri;
