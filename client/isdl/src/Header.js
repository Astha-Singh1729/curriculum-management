import React from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import './Header.css'
import { useStateValue } from './StateProvider'

function Header() {
  const navigate = useNavigate();
  let { id } = useParams();
  const handleAuthentication = e => {
    localStorage.removeItem("Username");
    localStorage.removeItem("Type");
    localStorage.removeItem("Password");
    navigate("/", {replace:true});
  }
  return (
    <div className='header'>
      <div className='header__title'>
        {localStorage.getItem('Username') !== null && 
        <Link to='/home'>CURRICULUM MANAGEMENT SYSTEM</Link>
        }
        {
          localStorage.getItem('Username') === null && 
          <>CURRICULUM MANAGEMENT SYSTEM</>
        }
        
      </div>
      {
        window.location.pathname.split('/')[1] === "view" &&   localStorage.getItem('Type') === "Adm"  && 
        <Link to={"/edit/"+id} className='link__edit'>
          <div className='header__edit'>
            Edit CIF
          </div>
        </Link>
      }

{
        window.location.pathname.split('/')[1] === "view" &&  localStorage.getItem('Type') === "Faculty" && 
        <Link to={"/edit/"+id} className='link__edit1'>
          <div className='header__edit'>
            Edit CIF
          </div>
        </Link>
      }

      {
        window.location.pathname !== "/" && window.location.pathname !== "/login" && localStorage.getItem('Type') === "Adm" &&
        <Link to="/requests" className='link__req'>
          <div className='header__req'>
            View Requests
          </div>
        </Link>
      }

      {
        localStorage.getItem('Username') !== null && 
        <div className='link__login' onClick={handleAuthentication}>
        <button className='header__login'>
            Logout
        </button>
      </div>
      }
      
    </div>
  )
}

export default Header
