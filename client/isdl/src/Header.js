import React from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import './Header.css'
import { useStateValue } from './StateProvider'

function Header() {
  const navigate = useNavigate();
  const [{userType}, dispatch] = useStateValue();
  let { id } = useParams();
  const handleAuthentication = e => {
    navigate("/", {replace:true});
  }
  return (
    <div className='header'>
      <div className='header__title'>
        {userType !== null && 
        <Link to='/home'>CURRICULUM MANAGEMENT SYSTEM</Link>
        }
        {
          userType === null && 
          <>CURRICULUM MANAGEMENT SYSTEM</>
        }
        
      </div>
      {
        window.location.pathname.split('/')[1] === "view" &&   userType === "admin"  && 
        <Link to={"/edit/"+id} className='link__edit'>
          <div className='header__edit'>
            Edit CIF
          </div>
        </Link>
      }

{
        window.location.pathname.split('/')[1] === "view" &&  userType === "faculty" && 
        <Link to={"/edit/"+id} className='link__edit1'>
          <div className='header__edit'>
            Edit CIF
          </div>
        </Link>
      }

      {
        window.location.pathname !== "/" && window.location.pathname !== "/login" && userType === "admin" &&
        <Link to="/requests" className='link__req'>
          <div className='header__req'>
            View Requests
          </div>
        </Link>
      }

      {
        userType !== null && 
        <div className='link__login' onClick={handleAuthentication}>
        <div className='header__login'>
            Logout
        </div>
      </div>
      }
      
    </div>
  )
}

export default Header
