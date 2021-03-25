import { render } from '@testing-library/react';
import React from 'react';
import { Link,Route } from 'react-router-dom';
import NamesItems from '../NamesItems/Names.component';

import './collection-item.styles.scss';

const CollectionItem = ({ name, imageUrl}) => {


  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <Route>
        <Link className='name' to='/names/:' name >{name}</Link>

       </Route>
        

      </div>

    </div>
  );




};



export default CollectionItem;
