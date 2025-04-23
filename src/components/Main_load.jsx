import React from 'react'
import image from '../assets/main_books.png'
const Main_load = () => {
    return (
        <div className='w-screen h-screen'>
            <div className="">
                <div className=''>
                    <img src={image} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                    <div className='text-4xl font-display text-center font-bold text-white'>
                        Learn a language easily with cards
                    </div>
                    <div className="text-xl font-displayR text-center font-bold text-gray-500">
                        Learn words using cards, choosing levels that are convenient for you
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main_load