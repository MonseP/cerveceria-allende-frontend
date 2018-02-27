import React, { Component } from 'react';
import DistriTable from './DistriTable';
import ModalDistri from './ModalDistri';
import MenuAdmin from '../administrador/MenuAdmin';
import '../administrador/Admin.css';



class DistriHome extends Component {
    render() {
        return (

                      <div>

                      <div className="prove-home">
                      <DistriTable />
                      <br />
                      <ModalDistri/>

                       </div>
                         </div>



        );
    }
}

export default DistriHome;
