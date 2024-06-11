// src/components/SearchResults.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchSearchResults } from '../store/movieSlice';
import Header from '../components/Header';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
    const query = useQuery().get('query');
    const type = useQuery().get('type') || 'movie';
    const dispatch = useDispatch();
    const searchResults = useSelector((state) => state.movies.searchResults);
    const status = useSelector((state) => state.movies.status);
    const error = useSelector((state) => state.movies.error);

    const navigate = useNavigate();

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };


    useEffect(() => {
        if (query) {
            dispatch(fetchSearchResults({ query, type }));
        }
    }, [dispatch, query, type]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const results = type === 'movie' ? searchResults.movies : type === 'tv' ? searchResults.tvShows : searchResults.people;

    return (
        <>
            <Header />
            <div className="container mx-auto px-6 py-8 text-white">
                <h1 className="text-2xl font-bold mb-4 ">Search Results for "{query}"</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {results.map((movie) => (
                        <div key={movie.id} onClick={() => handleMovieClick(movie.id)} className="bg-gray-800 bg-opacity-40 p-4 rounded hover:cursor-pointer hover:scale-105 transition duration-150 ease-in-out">
                            <img
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path || movie.profile_path}`}
                                alt={movie.title || movie.name}
                                className="w-full h-auto mb-2"
                            />
                            <h2 className="text-lg font-bold">{movie.title || movie.name}</h2>
                            <p className='my-2'>Rating: <span className='font-bold text-red-400'>{movie.vote_average}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SearchResults;
