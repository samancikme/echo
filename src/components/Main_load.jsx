import React, { useEffect, useState } from 'react';
import image from '../assets/main_books.png';
import Echo from './Echo';
import { motion, AnimatePresence } from 'framer-motion';

const Main_load = () => {
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMain(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-screen h-screen relative overflow-hidden  select-none">
            <AnimatePresence mode="wait">
                {!showMain && (
                    <motion.div
                        key="echo"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute w-full h-full"
                    >
                        <Echo />
                    </motion.div>
                )}

                {showMain && (
                    <motion.div
                        key="mainload"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute w-full h-full flex flex-col items-center justify-center"
                    >
                        <div className="w-full h-[400px] flex items-center justify-center">
                            <img
                                src={image}
                                alt="main"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className="text-[34px] font-display text-center leading-10 text-white font-semibold">
                                Learn a language easily with cards
                            </div>
                            <div className="text-xl text-center text-gray-400">
                                Learn words using cards, choosing levels that are convenient for you
                            </div>
                        </div >
                        <button className="mt-8 bg-yellow-400 text-black font-bold py-3 px-6 w-full active:scale-95 rounded-xl hover:bg-yellow-300 transition">
                            Get started
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Main_load;
