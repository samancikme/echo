import React, { useState } from 'react';
import image from '../assets/main_books.png';

const Main_load = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className='w-screen h-screen bg-black'>
            <div className="flex flex-col items-center justify-center h-full gap-4">
                <div className='w-[300px] h-[300px] flex items-center justify-center'>
                    {!imageLoaded && (
                        <div className="w-full h-full bg-gray-800 rounded-md animate-pulse" />
                    )}
                    <img
                        src={image}
                        alt="main"
                        className={`w-full h-full object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)} />
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
    );
};

export default Main_load;
