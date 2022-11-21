import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cif from './Cif'
import './Requests.css'

function Requests() {
  const [requests,setRequests] = useState([]);
  const client = axios.create({
    baseURL: "http://localhost"
  })
  useEffect(() => {
    client.get("/requests").then((response) => {
      setRequests(response.data)
    })
  })
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
            {requests.map(req => (
                <Link to="/req"><Cif id={req.id} name={req.course} dep={req.faculty}/></Link>
            ))}
            
        </div>
    </div>
  )
}

export default Requests
