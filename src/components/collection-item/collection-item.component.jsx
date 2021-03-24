import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import NamesItems from '../Names/Names.component';

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
        <Link className='name' to={{pathname:'/names/'+name}} >{name}</Link>

      </div>

    </div>
  );




};



export default CollectionItem;
