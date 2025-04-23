import React from 'react'
import image from '../assets/image.svg'
const Echo = () => {
  return (
    <div className='w-[calc(100vw-48px)] h-screen flex justify-center items-center'>
      <div className="flex justify-center translate-y-[-20%]">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Echo