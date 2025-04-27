import { BiCheckSquare } from "react-icons/bi";
import React, { useState } from 'react';
import uz from '../public/flags/uz.svg'
import ru from '../public/flags/rus.svg'
import kr from '../public/flags/kr.svg'
import en from '../public/flags/en.svg'
import check from '../public/icon/Checkbox.svg'
import Button from "./Button";

const NativeLang = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const languages = [
        { id: 1, name: 'English' },
        { id: 2, name: 'Russian' },
        { id: 3, name: 'Uzbek' },
        { id: 4, name: 'Karakalpak' },
    ];

    const handleLanguageSelect = (language) => {
        if (selectedLanguage?.id === language.id) {
            setSelectedLanguage(null); // Agar tanlangan tilni yana bossak, unselect bo'ladi
        } else {
            setSelectedLanguage(language); // Aks holda, yangi tilni tanlaymiz
        }
    };

    return (
        <div className='w-full select-none h-screen flex flex-col justify-between pb-[64px] items-center pt-[24px]'>
            <div>
                <div className="text-2xl font-sf_B text-center text-white font-semibold px-[40px] mb-8">
                    Choose your native language
                </div>
                <div className="w-full space-y-[8px]">
                    {languages.map((language) => (
                        <div
                            key={language.id}
                            className={`w-full py-4 px-6 rounded-[16px] cursor-pointer transition-all gap-[8px] flex justify-between ${selectedLanguage?.id === language.id
                                ? 'border-[#F1CC06] border shadow-lg'
                                : 'border border-gray-700'}`}
                            onClick={() => handleLanguageSelect(language)}>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={language.id === 1 ? en : language.id === 2 ? ru : language.id === 3 ? uz : kr}
                                        alt={language.name}
                                        className="w-[21px] h-[15px]" />
                                </div>
                                <span className="text-white text-lg  font-semibold">
                                    {language.name}
                                </span>
                            </div>
                            <div className=" jus">
                                {selectedLanguage?.id === language.id && (
                                    <img src={check} alt="" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full">
                <Button>
                    <span className={`text-2xl ${selectedLanguage ? 'text-[#14161b]' : 'text-[#14161b85]'}`}>
                        Next
                    </span>
                </Button>
            </div>
        </div>
    );
}

export default NativeLang;