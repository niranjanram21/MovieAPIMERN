// src/components/SearchResults.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchSearchResults } from '../store/movieSlice';
import Header from '../components/Header';
import ItemCard from '../components/ItemCard';

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
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {results.map((movie) => (

                        <ItemCard onClick={() => handleMovieClick(movie.id)} id={movie.id} title={movie.title} poster={movie.poster_path} vote={movie.vote_average} />

                    ))}
                </div>
            </div>
        </>
    );
};

export default SearchResults;
