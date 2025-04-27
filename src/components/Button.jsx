import React from 'react'

const Button = ({ children }) => {
  return (
    <div className='mt-8 bg-yellow-400 text-black text-[20px] font-bold py-3 px-6 w-full active:scale-95 rounded-xl hover:bg-yellow-300 transition text-center'>
      {children}
    </div>
  )
}

export default Button