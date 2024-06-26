import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../swiper.css';
import { fetchTopRatedTV } from '../../store/movieSlice';
import SwiperComponent from '../SwiperComponent';

const TopRated = () => {
    const dispatch = useDispatch();
    const { topRated, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchTopRatedTV());
    }, [dispatch]);

    if (status === 'loading' || !topRated) return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <>
            {topRated && <SwiperComponent data={topRated} title="Top Rated TV Shows" />}
        </>
    );
};

export default TopRated;
