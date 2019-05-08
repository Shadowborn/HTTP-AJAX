import React from 'react';

function Form (props) {
      console.log(props);
      return (
            <div className='formContainer'>
                  <h1>Add New Friend</h1>
                  <div className='form'>
                        <input
                              type='text'
                              name='name'
                              placeholder='name'
                              value={props.friend.name}
                        >
                        </input>
                        <input
                              type='number'
                              name='age'
                              placeholder='age'
                              value={props.friend.age}
                        >
                        </input>
                        <input
                              type='text'
                              name='email'
                              placeholder='email'
                              value={props.friend.email}
                        >
                        </input>
                        <button className="buttForm">Add Friend</button>
                  </div>

            </div>
      )



}




export default Form