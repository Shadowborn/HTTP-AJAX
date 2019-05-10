import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class FriendList extends Component{
  state = {
    friends: null
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => this.setState({ friend: res.data }))
      .catch(err => console.log(err));
  }

  // deleteItem = e => {
  //   console.log("FriendList delete item state", this.state)
  //   e.preventDefault();
  //   this.props.deleteItem(this.state.friends);
    
  // };

  render() {
    return (
      <div className='friends'>
        { this.props.friends.map(friend => 
        <div key={friend.id}>
        {console.log("Friend", friend)}
          <h1>{friend.name}</h1>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
          <button onClick={e => this.props.deleteItem(e, friend.id)}>Delete</button>
        </div>
        )}
      </div>
    );
  }
}
  export default FriendList;