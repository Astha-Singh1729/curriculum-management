import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom'
import Cif from './Cif'
import './Home.css'


function Home() {
  const [cifs,setCifs] = useState([]);
  const client = axios.create({
    baseURL: "http://localhost"
  })
  useEffect(() => {
    client.get("/cifsbydepartment").then((response) => {
      const newcifs = response.data.filter(cif => cif.department === "computer science engineering")
      setCifs(newcifs)
    })
  })
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
        {cifs.map(cif => (
          <Link to="/view"><Cif id = {cif.id} name = {cif.course} dep={cif.department}></Cif></Link>
        ))}
      </div>
    </div>
  )
}

export default Home
