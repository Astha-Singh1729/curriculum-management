import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom'
import Cif from './Cif'
import './Home.css'


function Home() {
  const [cifs,setCifs] = useState([]);
  const [dep,setDep] = useState('');
  useEffect(() => {
    console.log("hello")
    if(localStorage.getItem('Type') === "Student"){
      axios.post("https://curriculum-management-nhp.herokuapp.com/getstu",{"username":localStorage.getItem('Username')}).then((response) => {
        setDep(response.data.branch);
      })
      console.log(dep);
      axios.post("https://curriculum-management-nhp.herokuapp.com/cifsbydepartment",{"department" : dep}).then((response) => {
        setCifs(response.data)
      })
    }else if(localStorage.getItem('Type') === "Adm"){
      axios.post("https://curriculum-management-nhp.herokuapp.com/cifs").then((response) => {
        const newcifs = response.data
        setCifs(newcifs)
      })
    }else if(localStorage.getItem('Type') === "Faculty"){
      axios.post("https://curriculum-management-nhp.herokuapp.com/cifs").then((response) => {
        const newcifs = response.data
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
      </div>
    </div>
  )
}

export default Home
