import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './swiper.css';
import { fetchPopularMovies } from '../store/movieSlice';
import SwiperComponent from './SwiperComponent';

const Popular = () => {
    const dispatch = useDispatch();
    const { popular, status, error } = useSelector((state) => state.movies); // Use newReleases instead of trending

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch]);

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <>
            <SwiperComponent data={popular} title="Popular Movies" />

        </>
    );
};

export default Popular;
