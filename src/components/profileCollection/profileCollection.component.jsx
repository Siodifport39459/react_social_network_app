import { render } from '@testing-library/react';
import React from 'react';

import './profileCollection.styles.scss';

const ProfileCollection = (item) => {
 
    return(
      <div className='collection-footer'>
      <img className="profile-photo" src={item.imageUrl} alt="profilephoto"/>
      <h2>{item.title}</h2>
      <div className="collection-sub">
      <p className="age">{item.age}</p>
      <p className='city'>{item.city}</p>
      <p className="education">{item.education}</p>
      <p className="profession">{item.profession}</p>
      <p className="friends">{item.friends}</p>
      <p className="hobby">{item.hobby}</p>
      <p>{item.status}</p> 
      </div>

      </div>
    )
}

export default ProfileCollection;
