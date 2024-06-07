import React from 'react';
import strangerThingsLogo from '../assets/homeTitle.webp';
import { FaPlay } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";

const Hero = () => {
    return (
        <div className="relative h-screen flex flex-col justify-center items-start text-white px-8">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-0"></div>
            <div className="relative z-10">
                <div className="strangerThingsLogo mb-8">
                    <img src={strangerThingsLogo} alt="Stranger Things" className="w-full max-w-md mx-auto" />
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center bg-red-600 py-2 px-6 rounded-md hover:bg-red-700">
                        <FaPlay className="mr-2" />
                        Play
                    </button>
                    <button className="flex items-center text-black bg-gray-300 py-2 px-6 rounded-md hover:bg-gray-500">
                        <CiCircleMore className="mr-2" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
