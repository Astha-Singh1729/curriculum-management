import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Req.css'

function Req() {
  const navigate = useNavigate();
  const [name,setName] = useState('');
  const [faculty,setFaculty] = useState('');
  const [dep,setDep] = useState('');
  const [content,setContent] = useState('');
  const [cifid,setCifid] = useState('');
  
  let { id } = useParams();

  const handleApprove = e => {
    e.preventDefault();
    axios.post("https://curriculum-management-nhp.herokuapp.com/updatecif",{"id":cifid,"content":content}).then((response) => {
    })
    axios.post("https://curriculum-management-nhp.herokuapp.com/deleterequest",{"id":id}).then((response) => {
      alert("Request has been approved");
      if(response.status===200){
       navigate("/requests");
      }
    })
  }

  const handleDeny = e => {
    e.preventDefault();
    axios.post("https://curriculum-management-nhp.herokuapp.com/deleterequest", {"id":id}).then((response) => {
      console.log(response);
      alert("Request has been denied");
      if(response.status===200){
        navigate("/requests");
      }
    })
  }

  useEffect(() => {
    axios.post("https://curriculum-management-nhp.herokuapp.com/requestbyid",{"id":id}).then((response) => {
      setName(response.data.course);
      setDep(response.data.department);
      setFaculty(response.data.faculty);
      setContent(response.data.temp_cif);
      setCifid(response.data.cifid);
    })
  })

  return (
    <div className='req'>
      <div className='req__container'>
            <h4 className='req__name'>
                {name}
            </h4>
            <h5 className='req__id'>
              {cifid}
            </h5>
            <h5 className='req__department'>
                {dep}
            </h5>
            <div className='req__content'>
              {content}
            </div>
            <div className='req__buttons'>
                <button type="submit" className='req__approve' onClick={handleApprove}>Approve</button>
                <button type="submit" className='req__deny' onClick={handleDeny}>Deny</button>
            </div>
      </div>
    </div>
  )
}

export default Req
