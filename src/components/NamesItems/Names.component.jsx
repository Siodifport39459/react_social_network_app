import { render } from '@testing-library/react';
import React from 'react'
import ProfileCollection from '../profileCollection/profileCollection.component'
import './Names.styles.scss'

class NamesItems extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:
      [
        { id: 1,
          title:"Anna",
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          age: 'age: 25',
          city:'city: Pune',
          education:'education: MBA',
          profession:'profession: business',
          friends:'no of friends: 12',
          hobby:'hobby: drawing',
          status:'status: Be Positive',
        },
        {   id: 2,
            title:'Susan',
            imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
            age:'age: 22',
            city:'city: Delhi',
            education:'education: B.com',
            profession:'profession: student',
            friends:'no.offriends: 30',
            hobby:'hobby: singing',
            status:'status: work hard',
        },
        {
          id: 3,
          title:'Jennie',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          age: 'age: 35',
          city:'city: Mumbai',
          education:'education: B.Tech',
          profession:'profession: Software Developer',
          friends:'no.offriends: 4',
          hobby:'hobby: dancing',
          status:'status: Every soul is beautiful',
        },
        {
          id: 4,
          title:'David',
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
    }
  }
  
 
render()
{

  return(
<div className='preview'>
  {this.state.items.filter((item) => item.title.indexOf(this.props.name) >= 0)
  .map(({id, ...otherItemProps}) => (
     <ProfileCollection key={id} {...otherItemProps}/>
  )
     )}
</div>

  );
}
}
export default NamesItems;


