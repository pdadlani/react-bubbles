import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleLogin = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubbles')
      })
      .catch(err => console.log(err.response));
  }

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
    console.log(credentials)
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div className='login-form'>
        <h1>Login Form</h1>
        <form onSubmit={handleLogin}>
          <input
            type='text'
            name='username'
            placeholder='username'
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button type='submit'>Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
