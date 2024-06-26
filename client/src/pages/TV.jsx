import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AiringTodayTV from '../components/Tv/AiringTodayTV';
import OnTheAirTV from '../components/Tv/OnTheAirTV';
import TopRated from '../components/Tv/TopRated';
import PopularTV from '../components/Tv/PopularTV';
import { fetchTVGenres } from '../store/movieSlice';

const TV = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const genres = useSelector((state) => state.movies.tvGenres);
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
        dispatch(fetchTVGenres());
        console.log('TV genres fetched');
    }, [dispatch]);

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
                <OnTheAirTV />
                <TopRated />
                <AiringTodayTV />
                <PopularTV />
            </div>
            <Footer />
        </>
    );
};

export default TV;
