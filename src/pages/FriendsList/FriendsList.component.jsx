import React from 'react';

import FRIENDS_DATA from './friends.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: FRIENDS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='friendslist'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default FriendsList;
