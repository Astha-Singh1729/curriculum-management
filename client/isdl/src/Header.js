import React from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import './Header.css'
import { useStateValue } from './StateProvider'

function Header() {
  const navigate = useNavigate();
  const [{userType, user}, dispatch] = useStateValue();
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
        window.location.pathname.split('/')[1] === "view" &&   userType === "Adm"  && 
        <Link to={"/edit/"+id} className='link__edit'>
          <div className='header__edit'>
            Edit CIF
          </div>
        </Link>
      }

{
        window.location.pathname.split('/')[1] === "view" &&  userType === "Faculty" && 
        <Link to={"/edit/"+id} className='link__edit1'>
          <div className='header__edit'>
            Edit CIF
          </div>
        </Link>
      }

      {
        window.location.pathname !== "/" && window.location.pathname !== "/login" && userType === "Adm" &&
        <Link to="/requests" className='link__req'>
          <div className='header__req'>
            View Requests
          </div>
        </Link>
      }

      {
        user !== null && 
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
