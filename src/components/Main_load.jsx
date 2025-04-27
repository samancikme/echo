import React, { useEffect, useState } from 'react';
import image from '../assets/main_books.png';
import Echo from './Echo';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import DuckAnimation from './DuckAnimation';

const Main_load = () => {
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMain(true);
        }, 3000);
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
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute w-full h-full flex flex-col items-center justify-center"
                    >
                        <div className="w-full h-[400px] flex items-center justify-center">
                            <DuckAnimation/>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className="text-[34px] font-display text-center leading-10 text-white font-semibold">
                                Learn a language easily with cards
                            </div>
                            <div className="text-xl text-center text-gray-400">
                                Learn words using cards, choosing levels that are convenient for you
                            </div>
                        </div >
                        <Button>
                            Get started
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Main_load;
