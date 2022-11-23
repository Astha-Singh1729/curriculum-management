import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useStateValue } from './StateProvider'
import './Viewcif.css'

function Viewcif() {
    const [{userType}, dispatch] = useStateValue();
    const [name,setName] = useState('');
    const [content,setContent] = useState('');
    const [dep,setDep] = useState('');
    console.log(userType);
    let { id } = useParams();
    useEffect(() => {
        axios.post("https://curriculum-management-nhp.herokuapp.com/cifbyid",{"id": id}).then((response) => {
            console.log(response.data);
            setName(response.data.course);
            setContent(response.data.content);
            setDep(response.data.department);
        })
    })
  return (
    <div className='view'>
        <div className='viewcif__container'>
            <h4 className='viewcif__name'>
                {name}
            </h4>
            <h5 className='viewcif__id'>
                {id}
            </h5>
            <h5 className='viewcif__department'>
                {dep}
            </h5>
            <div className='viewcif__content'>
            {content}
            </div>
        </div>
      
    </div>
  )
}

export default Viewcif
