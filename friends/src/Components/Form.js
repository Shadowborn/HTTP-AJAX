import React from 'react';



class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        friends: {
            name: '',
            age: null,
            email: ''
        }
      };
      console.log("Constructor friends", this.state.friends)
    }

    
    handleChange = event => {
        event.persist();
        this.setState({
        friends: {
            ...this.state.friends,
            [event.target.name]: event.target.value
            }
        });
    };

    handleSubmit = e => {
        console.log("submit state", this.state)
        e.preventDefault();
        // this.props.friends(this.state.friends);
        this.props.postNewFriend(this.state.friends);
      };

render() {
    return (
        <div className='formContainer'>
            <h1>Add New Friend</h1>
            <form onSubmit={this.handleSubmit} className='form'>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    onChange={this.handleChange}
                    value={this.name}
                >
                </input>
                <input
                    type='number'
                    name='age'
                    placeholder='age'
                    onChange={this.handleChange}
                    value={this.age}
                >
                </input>
                <input
                    type='text'
                    name='email'
                    placeholder='email'
                    onChange={this.handleChange}
                    value={this.email}
                >
                </input>
                <button className="buttForm" type="submit">Add Friend</button>
            </form>

        </div>
    )
}

}



export default Form