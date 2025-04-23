import React from 'react'
import image from '../assets/main_books.png'
const Main_load = () => {
    return (
        <div className='w-screen h-screen'>
            <div className="">
                <div className=''>
                    <img src={image} alt="" />
                </div>
                <div className="">
                    <h3 className='text-3xl text-center font-bold text-white'>
                        Learn a language easily with cards
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Main_load