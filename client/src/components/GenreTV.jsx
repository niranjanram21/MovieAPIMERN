import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchTVShowsByGenre, fetchTVGenres } from '../store/movieSlice';
import Header from './Header';
import Footer from './Footer';
import ItemCard from './ItemCard';

const GenreTV = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const genres = useSelector((state) => state.movies.tvGenres);
    const [selectedGenre, setSelectedGenre] = useState('');

    const { genreId } = useParams();
    const tvShows = useSelector((state) => state.movies.tvShowsByGenre);
    const status = useSelector((state) => state.movies.status);

    useEffect(() => {
        dispatch(fetchTVGenres());
        console.log('TV genres fetched');
    }, [dispatch]);

    useEffect(() => {
        if (genreId) {
            dispatch(fetchTVShowsByGenre(genreId));
            console.log('TV shows fetched');
        }
    }, [dispatch, genreId]);

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
        if (e.target.value) {
            navigate(`/tv/genre/${e.target.value}`);
        }
    };

    return (
        <>
            <Header />
            <div className="py-4 px-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="genre" className="block text-white text-lg font-bold mb-2">Filter by Genre:</label>
                    <select
                        id="genre"
                        value={selectedGenre}
                        onChange={handleGenreChange}
                        className="bg-red-600 bg-opacity-70 text-white py-2 px-3 rounded"
                    >
                        <option value="">All Genres</option>
                        {genres.map((genre) => (
                            <option key={genre.id} className="bg-red-600 bg-opacity-70" value={genre.id}>{genre.name}</option>
                        ))}
                    </select>
                </div>
                <h2 className="text-white text-2xl font-bold mb-4">TV Shows</h2>
                {status === "loading" && <p className="text-white">Loading...</p>}
                {status === "failed" && <p className="text-white">Failed to load TV shows.</p>}
                {status === "succeeded" && (
                    <div className="grid grid-cols-6 gap-4">
                        {tvShows.map((show) => (
                            <ItemCard id={show.id} detailPage={show.id} title={show.title} poster={show.poster_path} vote={show.vote_average} />
                        ))}

                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default GenreTV;
