import { render } from '@testing-library/react';
import React from 'react';
import { Link,Route,withRouter } from 'react-router-dom';
import NamesItems from '../NamesItems/Names.component';

import './collection-item.styles.scss';

const CollectionItem = ({ name, imageUrl,linkUrl,match,history}) => {

  return (
    <div className='collection-item'>
      <Link
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        to={"/friendslist/"+`${name}`}
      />
      <div className='collection-footer'>
       <Link className="name" to={"/friendslist/"+`${name}`}>{name}</Link>
      </div>

    </div>
  );




};



export default withRouter(CollectionItem);
