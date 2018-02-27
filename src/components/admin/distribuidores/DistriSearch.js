import React, { Component } from 'react';
import { Input } from 'antd';
import '../administrador/Admin.css';

const Search = Input.Search;
class DistriSearch extends Component {
  render() {
      return (


  <div className="buscador">
    <Search
      placeholder="Buscar"
      onSearch={value => console.log(value)}
      style={{ width: 200}}
    />
  </div>

);
}
}

  export default DistriSearch;
