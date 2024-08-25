import React from 'react'
import errorImage from "../assets/error.jpg"

const Error = () => {
  return (
    <div className="error">
      <div className='text-center'>
      <h1 className=' right-0 text-5xl text-red-500 mt-[10rem]'>404</h1> <br /> 
      <p className='text-4xl'>This Page is not found</p>
      <img className='mt-[1rem]' src={errorImage} alt="" />
          </div>
    </div>
  )
}

export default Error
