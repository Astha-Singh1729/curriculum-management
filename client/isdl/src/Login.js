import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const navigate = useNavigate();
  const [{ userType, user }, dispatch] = useStateValue();
  const handleAuthentication = e => {
    e.preventDefault();
    console.log("hello");

    axios.post("https://curriculum-management-nhp.herokuapp.com/userexists",{"usertype" : userType, "user" : username}).then((response) => {
      console.log(response.data);
      if(response.data){
        dispatch({
          type: 'SET_USER',
          user: username
        });
        console.log(user);
        navigate("/home")
      }
    })
  }
  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Login</h1>
        <form onSubmit={handleAuthentication}>
          <h5>Username</h5>
          <input type='text' value={username} onChange={e => setUsername(e.target.value)}/>
          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
          <button type='submit' className='login__signInButton'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
