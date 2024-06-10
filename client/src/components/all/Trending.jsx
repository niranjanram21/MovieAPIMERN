// src/components/TrendingMovies.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../swiper.css';

import { fetchTrending, fetchTrailers } from '../../store/movieSlice';
import SwiperComponent from '../SwiperComponent';

const Trending = () => {
    const dispatch = useDispatch();
    const { trending, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const actionResult = await dispatch(fetchTrending());
            if (fetchTrending.fulfilled.match(actionResult)) {
                dispatch(fetchTrailers(actionResult.payload));
            }
        };

        fetchTrendingMovies();
    }, [dispatch]);

    if (status === 'loading' || !trending) return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <>
            {trending && <SwiperComponent data={trending} title="Trending" />}
        </>
    );
};

export default Trending;
