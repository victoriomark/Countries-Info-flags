import React from 'react'
import icon from '../Components/images/icon.svg'
function NoData() {
  return (
    <div className='container-fluid d-flex flex-column  justify-content-center align-items-center'>
      <h1 className='text-center'>Search your Country!!</h1>
      <img className='img-fluid' src={icon} alt="No Data Icon" />
    </div>
  )
}

export default NoData