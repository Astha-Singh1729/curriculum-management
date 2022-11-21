import React from 'react'
import './Login.css'
import { useStateValue } from './StateProvider';
function Login() {
  const [{ userType }, dispatch] = useStateValue();
  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Login</h1>
        <form>
          <h5>Username</h5>
          <input type='text' />
          <h5>Password</h5>
          <input type='password' />
          <button type='submit' className='login__signInButton'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
