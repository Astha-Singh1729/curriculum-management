import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Editcif.css'
import { useStateValue } from './StateProvider';

function Editcif() {
  const [name,setName] = useState('');
    const [content,setContent] = useState('');
    const [dep,setDep] = useState('');
    let { id } = useParams();
    const help = e => {
      e.preventDefault();
      if(localStorage.getItem('Type') === "Faculty"){
        axios.post("https://curriculum-management-nhp.herokuapp.com/insertrequest",{"course":name, "department":dep,"faculty":localStorage.getItem('Username'),"temp_cif":content,"cifid":id}).then((response) => {
        console.log(content)
        alert("Your request has been submitted");
      })
      }else{
        axios.post("https://curriculum-management-nhp.herokuapp.com/updatecif",{"id":id,"content":content}).then((response) => {
    })
    alert("cif has been edited");
      }
    }
    useEffect(() => {
        axios.post("https://curriculum-management-nhp.herokuapp.com/cifbyid",{"id": id}).then((response) => {
            console.log(response.data);
            setName(response.data.course);
            setContent(response.data.content);
            setDep(response.data.department);
        })
    },[])
  return (
    <div className='edit'>
      <div className='editcif__container'>
        <form onSubmit={help}>
          <h5>Course Name</h5>
          <input value={name} type="text" onChange={e => setName(e.target.value)}></input>
          <h5>Course Id</h5>
          <input value={id} type="text"></input>
          <h5>Department</h5>
          <input value = {dep} type="text" onChange={e => setDep(e.target.value)}></input>
          <h5>Course Content</h5>
          <textarea value={content} rows="20" cols="60" onChange={e => setContent(e.target.value)}></textarea>
          <button type='submit' className='login__signInButton'>Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default Editcif
