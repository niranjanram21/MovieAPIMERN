import React from 'react'
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ id, poster, title, vote, detailPage }) => {
    const navigate = useNavigate();

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    return (

        <div key={id} onClick={() => handleMovieClick(detailPage)} className="bg-gray-900 text-white bg-opacity-30 p-2 rounded hover:cursor-pointer hover:scale-105 transition duration-150 ease-in-out">
            <img
                src={`https://image.tmdb.org/t/p/w200${poster}`}
                alt=""
                className="w-full h-auto mb-2"
            />
            <h2 className="text-lg font-bold">{title}</h2>
            <p className='my-1'>Rating: <span className='font-bold text-red-400'>{vote}</span></p>
        </div>

    )
}

export default ItemCard
