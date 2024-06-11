import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../swiper.css';
import { fetchPopularTV } from '../../store/movieSlice';
import SwiperComponent from '../SwiperComponent';

const PopularTV = () => {
    const dispatch = useDispatch();
    const { popularTV, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchPopularTV());
    }, [dispatch]);

    if (status === 'loading' || !popularTV) return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <>
            {popularTV && <SwiperComponent data={popularTV} title="Popular TV shows" />}
        </>
    );
};

export default PopularTV;
