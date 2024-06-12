import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewReleases from '../components/Movies/NewReleases';
import BlockbusterMovies from '../components/Movies/BlockbusterMovies';
import Popular from '../components/Movies/Popular';
import { fetchMovieGenres } from '../store/movieSlice';

const Movies = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const genres = useSelector((state) => state.movies.movieGenres);
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
        dispatch(fetchMovieGenres());
        console.log('genres fetched')
    }, [dispatch]);

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
        if (e.target.value) {
            navigate(`/movies/genre/${e.target.value}`);
        }
    };

    return (
        <>
            <Header />
            <div className="py-4 px-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="genre" className="block text-white font-bold mb-2">Select Genre:</label>
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
                <NewReleases />
                <BlockbusterMovies />
                <Popular />
            </div>
            <Footer />
        </>
    );
};

export default Movies;
