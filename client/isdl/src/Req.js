import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Req.css'

function Req() {

  let { id } = useParams();

  useEffect(() => {
    //get name,content,dep from db
  })

  return (
    <div className='req'>
      <div className='req__container'>
            <h4 className='req__name'>
                Introduction to Data Science
            </h4>
            <h5 className='req__id'>
                CSE123
            </h5>
            <h5 className='req__department'>
                Computer Science Engineering
            </h5>
            <div className='req__content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elit ut erat tristique feugiat et quis nibh. Aliquam erat volutpat. Vestibulum mattis magna sapien, a tincidunt eros congue sit amet. Maecenas placerat tellus risus, finibus ultrices quam blandit vitae. Nam at lobortis turpis. Maecenas ultrices libero felis, in vulputate libero dictum sed. Nunc commodo accumsan justo. Mauris sed nulla non dui pulvinar ultricies malesuada sit amet libero. Nulla vestibulum nisl ac lectus tincidunt bibendum. Nullam malesuada pretium orci, sit amet tempus nulla rutrum sed. Mauris tempor lacinia ipsum eu convallis. Nam id risus laoreet, rhoncus eros non, finibus ante. Ut ut mauris ultricies, aliquet diam blandit, hendrerit sapien. Suspendisse potenti.
            </div>
            <div className='req__buttons'>
                <button type="submit" className='req__approve'>Approve</button>
                <button type="submit" className='req__deny'>Deny</button>
            </div>
      </div>
    </div>
  )
}

export default Req
