import React from 'react'
import { Link } from 'react-router-dom'
import Cif from './Cif'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__heading'>
          <h5 className='heading__name'>
            Course Name
          </h5>
          <h5 className='heading__id'>
            Course Id
          </h5>
          <h5 className='heading__department'>
            Department
          </h5>
        </div>
        <Link to="/view"><Cif id="CSE132" name="Introduction to Data Science" dep="Computer Science Engineering"></Cif></Link>
        <Link to="/view"><Cif id="CSE132" name="Introduction to Data Science" dep="Computer Science Engineering"></Cif></Link>
      </div>
    </div>
  )
}

export default Home
