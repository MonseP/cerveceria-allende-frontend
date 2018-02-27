import React, { Component } from 'react';
import { Modal, Button, Icon} from 'antd';
import DatosCat from './DatosCat';
import './Catalogo.css';



class ModalCatalogo extends React.Component {

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
       <div  className="modal">
         <Button  type="primary" onClick={this.showModal}><Icon type="plus" /></Button>

         <Modal
           title="Agrega un Nuevo Producto"
           visible={this.state.visible}
           onOk={this.handleOk}
           onCancel={this.handleCancel}
           okText="Aceptar"
           cancelText="Cancelar"
         >
          <DatosCat/>


         </Modal>
       </div>
     );
   }
 }


export default ModalCatalogo;
