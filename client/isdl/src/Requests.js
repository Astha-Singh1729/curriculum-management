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
    //get list of requests from requests table 
  })
  return (
    <div className='requests'>
        <div className='requests__container'>
            <div className='requests__heading'>
                <h5 className='heading__name'>
                    Course Name
                </h5>
                <h5 className='heading__faculty'>
                    Faculty Name
                </h5>
            </div>
            {requests.map(req => (
                <Link to={"/req/"+req.id}><Cif id={req.cifid} name={req.course} dep={req.faculty}/></Link>
            ))}
            <Link to="/req/CSE132"><Cif id="CSE132" name="IDS" dep="Sakthi Balan"/></Link>
        </div>
    </div>
  )
}

export default Requests
