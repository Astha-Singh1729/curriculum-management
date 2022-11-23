import React, { useEffect, useState } from 'react';
import axios from "./axios"
import { Link } from 'react-router-dom'
import Cif from './Cif'
import './Home.css'
import { useStateValue } from './StateProvider';


function Home() {
  const [cifs,setCifs] = useState([]);
  const [{ userType, user}, dispatch] = useStateValue();
  useEffect(() => {
    if(userType === "student"){
      axios.post("/cifsbydepartment").then((response) => {
        const newcifs = response.data.filter(cif => cif.department === user.dep)
        setCifs(newcifs)
      })
    }else if(userType === "admin"){
      axios.post("/cifs").then((response) => {
        const newcifs = response.data
        setCifs(newcifs)
      })
    }else if(userType === "faculty"){

      axios.post("/cifsbydepartment",{"department" : user.dep}).then((response) => {
        const newcifs = response.data.filter(cif => cif.department === user.dep)
        setCifs(newcifs)
      })
    }
  })
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__heading'>
          <h5 className='heading__name'>
            Course Name
          </h5>
          <h5 className='heading__department'>
            Department
          </h5>
        </div>
        {cifs.map(cif => (
          <Link to={"/view/"+cif.id}><Cif name = {cif.course} dep={cif.department}></Cif></Link>
        ))}
        <Link to="/view/CSE12"><Cif id = "CSE132" name = "IDS" dep="CSE"></Cif></Link>
      </div>
    </div>
  )
}

export default Home
