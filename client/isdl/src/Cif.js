import React from 'react'
import './Cif.css'

function Cif({name,id,dep}) {
  return (
    <div className='cif'>
      <div className='cif__name'>
        {name}
      </div>
      <div className='cif__id'>
        {id}
      </div>
      <div className='cif__department'>
        {dep}
      </div>
    </div>
  )
}

export default Cif
