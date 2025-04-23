import React, { useState } from 'react';
import image from '../assets/main_books.png';

const Main_load = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className='w-screen h-screen'>
            <div className="flex flex-col items-center  h-full gap-4">
                <div className='w-full h-[400px] flex items-center justify-center'>
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
                    <div className='text-[34px] font-display text-center leading-12 font-semibold text-white'>
                        Learn a language easily with cards
                    </div>
                    <div className="text-xl font-displayR text-center text-gray-500">
                        Learn words using cards, choosing levels that are convenient for you
                    </div>
                </div>

                <div className="w-full flex bottom-[64px]"> 
                    <button className='text-black font-bold bg-button-yellow hover:bg-button-yellow-hover  text-xl py-[12px] px-auto rounded-[16px] w-full active:scale-95 transition duration-300'>
                        Get started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main_load;
