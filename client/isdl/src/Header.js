import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header__title'>
        <Link to='/home'>CURRICULUM MANAGEMENT SYSTEM</Link>
      </div>
      {
        window.location.pathname === "/view" && 
        <Link to="/edit" className='link__edit'>
          <div className='header__edit'>
            Edit CIF
          </div>
        </Link>
      }

      {
        window.location.pathname !== "/" && window.location.pathname !== "/login" && 
        <Link to="/requests" className='link__req'>
          <div className='header__req'>
            View Requests
          </div>
        </Link>
      }
      <Link to="/login" className='link__login'>
        <div className='header__login'>
            Logout
        </div>
      </Link>
    </div>
  )
}

export default Header
