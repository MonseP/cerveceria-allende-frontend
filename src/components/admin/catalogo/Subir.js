import React from 'react';
import { Upload, Button, Icon } from 'antd';
import './Catalogo.css';


export const  Subir = () => {



const props2 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',

  className: 'upload-list-inline',
};

    return (
      <div>

          <Upload {...props2}>
            <Button>
              <Icon type="upload" /> Subir imagen
            </Button>
          </Upload>
        </div>






    );
}

export default Subir;
