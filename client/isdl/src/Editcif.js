import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Editcif.css'
import { useStateValue } from './StateProvider';

function Editcif() {
  const [{userType,user}, dispatch] = useStateValue();
  const [name,setName] = useState('');
    const [content,setContent] = useState('');
    const [dep,setDep] = useState('');
    console.log(userType);
    let { id } = useParams();
    const help = e => {
      e.preventDefault();
    console.log("hello");
      axios.post("https://curriculum-management-nhp.herokuapp.com/insertrequest",{"course":name, "department":dep,"faculty":user,"temp_cif":content,"cifid":id}).then((response) => {
        console.log(content)
        alert("Your request has been submitted");
      })
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
