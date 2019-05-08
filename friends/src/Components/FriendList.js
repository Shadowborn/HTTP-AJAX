import React, { Component } from 'react';


function FriendList(props) {
  const friends = props.friends;
  const listFriends = friends.map(friend => 
    <li key={friend.id}>
      {friend}
    </li>
  );
  return(<div>{listFriends}</div>)
}

  
  export default FriendList;