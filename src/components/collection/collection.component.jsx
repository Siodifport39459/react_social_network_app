import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import NamesItems from '../Names/Names.component';
import {Card} from 'react-bootstrap'

import './collection.styles.scss';

const Collection = ({ name, age, imageUrl,city,education,
profession,
friends,
hobby,
status}) => (

 
  
    <div className='collection-item'>
      <div className='image'>
        <Card.Img src={imageUrl}/>

      </div>
        
        <div className='collection-footer'>
        {/*<span className='name' >{name}({age})</span>
        <span className='city'>{city}</span>*/}
        <Card.Body>
          <Card.Title >{name}</Card.Title>
          <Card.Title>{age}</Card.Title>
          <Card.Title>{city}</Card.Title>
          <Card.Title>{education}</Card.Title>
          <Card.Title>{profession}</Card.Title>
          <Card.Title>{hobby}</Card.Title>
          <Card.Title>{status}</Card.Title>
          <Card.Title>{friends}</Card.Title>


        </Card.Body>
      </div>
      
    </div>
  

 
  

)



export default Collection; 
