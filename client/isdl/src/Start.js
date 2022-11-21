import React from 'react'
import { Link } from 'react-router-dom';
import './Start.css';
import { useStateValue } from './StateProvider';
function Start() {

  const [userType, dispatch] = useStateValue();
  const handleClick = event => {
    dispatch({
      type: 'SET_ROLE',
      role: event.currentTarget.id,
    });
  };
  return (
    <div className='start'>
      <Link to='/login'>
        <div className='start__option1' id='Student' onClick={handleClick}>
          Student
        </div>
        <div className='start__option2' id='Faculty' onClick={handleClick}>
          Faculty
        </div>
        <div className='start__option3' id='Admin' onClick={handleClick}>
          Admin
        </div>
      </Link>
    </div>
  )
}
export default Start