import React from 'react'
import './Editcif.css'

function Editcif() {
  return (
    <div className='edit'>
      <div className='editcif__container'>
        <form>
          <h5>Course Name</h5>
          <input defaultValue="Introduction to Computer Science" type="text"></input>
          <h5>Course Id</h5>
          <input defaultValue={"CSE132"} type="text"></input>
          <h5>Department</h5>
          <input defaultValue={"Computer Science Engineering"} type="text"></input>
          <h5>Course Content</h5>
          <textarea defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elit ut erat tristique feugiat et quis nibh. Aliquam erat volutpat. Vestibulum mattis magna sapien, a tincidunt eros congue sit amet. Maecenas placerat tellus risus, finibus ultrices quam blandit vitae. Nam at lobortis turpis. Maecenas ultrices libero felis, in vulputate libero dictum sed. Nunc commodo accumsan justo. Mauris sed nulla non dui pulvinar ultricies malesuada sit amet libero. Nulla vestibulum nisl ac lectus tincidunt bibendum. Nullam malesuada pretium orci, sit amet tempus nulla rutrum sed. Mauris tempor lacinia ipsum eu convallis. Nam id risus laoreet, rhoncus eros non, finibus ante. Ut ut mauris ultricies, aliquet diam blandit, hendrerit sapien. Suspendisse potenti."} rows="20" cols="60"></textarea>
          <button type='submit' className='login__signInButton'>Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default Editcif