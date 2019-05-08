import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import Form from "./Components/Form"

import axios from 'axios';

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
 
  render() {
    return (
      <div className='App'>
        { this.state.friends.map(friend => 
        <div>
          <h1>{friend.name}</h1>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
          <button>X</button>
        </div>
        )}
        <Form friend={this.state.friends}/>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;