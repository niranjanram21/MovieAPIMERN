import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMoviesByGenre, fetchMovieGenres } from '../store/movieSlice';
import Header from './Header';
import Footer from './Footer';
import ItemCard from './ItemCard';

const GenreMovies = () => {

    const dispatch1 = useDispatch();
    const navigate = useNavigate();
    const genres = useSelector((state) => state.movies.movieGenres);
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
        dispatch1(fetchMovieGenres());
        console.log('genres fetched')
    }, [dispatch1]);

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
        if (e.target.value) {
            navigate(`/movies/genre/${e.target.value}`);
        }
    };


    const { genreId } = useParams();
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.moviesByGenre);
    const status = useSelector((state) => state.movies.status);

    useEffect(() => {
        if (genreId) {
            dispatch(fetchMoviesByGenre(genreId));
            console.log('movies fetched')
        }
    }, [dispatch, genreId]);

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
                <h2 className="text-white text-2xl font-bold mb-4">Movies</h2>
                {status === "loading" && <p className="text-white">Loading...</p>}
                {status === "failed" && <p className="text-white">Failed to load movies.</p>}
                {status === "succeeded" && (
                    <div className="grid grid-cols-6 gap-4">
                        {movies.map((movie) => (
                            <ItemCard id={movie.id} detailPage={movie.id} title={movie.title} poster={movie.poster_path} vote={movie.vote_average} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default GenreMovies;
