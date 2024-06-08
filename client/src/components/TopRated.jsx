import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './swiper.css';
import { fetchTopRatedMovies } from '../store/movieSlice';
import SwiperComponent from './SwiperComponent';

const TopRated = () => {
    const dispatch = useDispatch();
    const { topRated, status, error } = useSelector((state) => state.movies); // Use newReleases instead of trending

    useEffect(() => {
        dispatch(fetchTopRatedMovies());
    }, [dispatch]);

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <>
            <SwiperComponent data={topRated} title="Top Rated movies" />

        </>
    );
};

export default TopRated;
