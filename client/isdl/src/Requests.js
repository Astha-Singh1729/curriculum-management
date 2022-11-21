import React from 'react'
import { Link } from 'react-router-dom'
import Cif from './Cif'
import './Requests.css'

function Requests() {
  return (
    <div className='requests'>
        <div className='requests__container'>
            <div className='requests__heading'>
                <h5 className='heading__name'>
                    Course Name
                </h5>
                <h5 className='heading__id'>
                    Course Id
                </h5>
                <h5 className='heading__faculty'>
                    Faculty Name
                </h5>
            </div>
            <Link to="/req"><Cif id="CSE132" name="Introduction to Computer Science" dep="Sakthi Balan"/></Link>
        </div>
    </div>
  )
}

export default Requests
