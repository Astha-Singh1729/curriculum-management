import React, { useState } from 'react'
import './Login.css'
import { useStateValue } from './StateProvider';

function Login() {
  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const [{ userType, user }, dispatch] = useStateValue();
  const handleAuthentication = e => {
   //handle login and stuff 
  }
  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Login</h1>
        <form>
          <h5>Username</h5>
          <input type='text' value={username} onChange={e => setUsername(e.target.value)}/>
          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
          <button type='submit' onClick={handleAuthentication} className='login__signInButton'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
