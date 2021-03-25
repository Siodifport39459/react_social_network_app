import { render } from '@testing-library/react';
import React from 'react'
import profileCollection from '../profileCollection/profileCollection.component'
import './Names.styles.scss'

const NamesItems= () => {
  const items=[
    {id: 1,
      name: 'name:Anna',
      imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
      age: 'age:25',
      city:'city:Pune',
      education:'education:MBA',
      profession:'profession:business',
      friends:'no of friends:12',
      hobby:'hobby:drawing',
      status:'status:Be Positive',



    },
    {
    id: 2,
        name: 'name:Susan',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        age:'age:22',
        city:'city:Delhi',
        education:'education:B.com',
        profession:'profession:student',
        friends:'no.offriends:30',
        hobby:'hobby:singing',
        status:'status:work hard',
    },
    {
      id: 3,
      name: 'name:Jennie',
      imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
      age: 'age:35',
      city:'city:Mumbai',
      education:'education:B.Tech',
      profession:'profession:Software Developer',
      friends:'no.offriends:4',
      hobby:'hobby:dancing',
      status:'status:Every soul is beautiful',
    },
    {
      id: 4,
      name: 'name:David',
      imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
      age: 'age:25',
      city:'city:Bangalore',
      education:'education:MCA',
      profession:'profession:nil',
      friends:'no.of.friends:12',
      hobby:'hobby:cooking',
      status:'status:All is well',
    }
]
render()
{
  return(
<div className='preview'>
  {items
    .map(({ id, ...otherItemProps }) => (
      <profileCollection key={id} {...otherItemProps} />
    ))}
</div>

  );
}

  {/*render(){
  
    
      if(match.params.id === collection.id){
        <h1>{collection.id}</h1>
      }
      
      
    
  
    }*/}
};

export default NamesItems;
