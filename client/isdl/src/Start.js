import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Start.css';
import { useStateValue } from './StateProvider';

function Start() {
  const [user_type, setState] = useState('Student');
  const handleClick = event => {
    setState(event.currentTarget.id);
  };
  console.log(user_type);
  return (
    <div className='start'>
      <Link to='/login'>
        <div className='start__option1' id="Student" onClick={handleClick}>
          Student
        </div>
        <div className='start__option2' id="Faculty" onClick={handleClick}>
          Faculty
        </div>
        <div className='start__option3' id="Adm" onClick={handleClick}>
          Admin
        </div>
      </Link>
    </div>
  )
}
export default Start
