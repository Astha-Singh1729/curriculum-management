import React from 'react'
import { Link } from 'react-router-dom';
import './Start.css';

function Start() {
  return (
    <div className='start'>
    <Link to='/login'>
      <div className='start__option1'>
        Student
      </div>
      <div className='start__option2'>
        Faculty
      </div>
      <div className='start__option3'>
        Admin
      </div>
      </Link>
    </div>
  )
}

export default Start
