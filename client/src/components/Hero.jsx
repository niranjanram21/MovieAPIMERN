import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStrangerThingsTrailer } from '../store/movieSlice';
import YouTube from 'react-youtube';
import strangerThingsLogo from '../assets/homeTitle.webp';
import { FaPlay } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Hero = () => {
    const dispatch = useDispatch();
    const trailerLink = useSelector((state) => state.movies.trailerLink);
    const [showTrailer, setShowTrailer] = useState(false);

    useEffect(() => {
        dispatch(fetchStrangerThingsTrailer());
    }, [dispatch]);

    const opts = {
        height: '200',
        width: '250',
        playerVars: {
            autoplay: 1,
        },
    };

    const trailerId = trailerLink ? new URL(trailerLink).searchParams.get('v') : null;

    return (
        <div className="relative h-screen flex flex-col justify-center items-start text-white px-8">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-0"></div>
            <div className="relative z-10">
                {showTrailer && trailerId ? (
                    <div className="relative">
                        <button
                            className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                            onClick={() => setShowTrailer(false)}
                        >
                            <IoMdClose size={20} />
                        </button>
                        <YouTube videoId={trailerId} opts={opts} />
                    </div>
                ) : (
                    <>
                        <div className="strangerThingsLogo mb-8">
                            <img src={strangerThingsLogo} alt="Stranger Things" className="w-full max-w-md mx-auto" />
                        </div>
                        <div className="flex gap-4">
                            <button
                                className="flex items-center bg-red-600 py-2 px-6 rounded-md hover:bg-red-700"
                                onClick={() => setShowTrailer(true)}
                                disabled={!trailerLink}
                            >
                                <FaPlay className="mr-2" />
                                Play
                            </button>
                            <button className="flex items-center text-black bg-gray-300 py-2 px-6 rounded-md hover:bg-gray-500">
                                <CiCircleMore className="mr-2" />
                                More Info
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Hero;
