import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import Form from './Components/Form'

import axios from 'axios';

// import './App.css';
import FriendList from './Components/FriendList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    };
    console.log("Constructor friends", this.state.friends)
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then((response) => {
        console.log("Response Data", response.data);
        this.setState({ 
          friends: response.data
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err.response.message });
        console.log("State after", this.state);
        
      });
      
  }

  postNewFriend = newFriend => {
    axios.post('http://localhost:5000/friends', newFriend)
      .then(res => { 
        this.setState({ friends: res.data })
        console.log(res);
      })
      .catch(err => { 
        console.log(err);
      });
  };

  deleteItem = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/')
      })
      .catch(err => console.log(err));
  };
 


  render() {
    return (
      <div className='App'>
        {/* { this.state.friends.map(friend => 
        <div key={friend.id}>
          <h1>{friend.name}</h1>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
          <button onClick={this.deleteItem}>X</button>
        </div>
        )} */}
        <FriendList friends={this.state.friends} deleteItem={this.deleteItem}/>
        <Form friend={this.state.friends} postNewFriend={this.postNewFriend} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;