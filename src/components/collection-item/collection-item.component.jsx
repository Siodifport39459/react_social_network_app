import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import NamesItems from '../Names/Names.component';

import './collection-item.styles.scss';

const CollectionItem = ({ name, age, imageUrl}) => {

 
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <Link className='name' to={{pathname:'/names/'+name,
      params:name}} >{name}</Link>
        <span className='price'>{age}</span>
      </div>
      
    </div>
  );

 
  

};



export default CollectionItem; 
