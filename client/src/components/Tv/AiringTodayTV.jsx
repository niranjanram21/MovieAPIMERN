import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../swiper.css';
import { fetchAiringTodayTV } from '../../store/movieSlice';
import SwiperComponent from '../SwiperComponent';

const AiringTodayTV = () => {
    const dispatch = useDispatch();
    const { airingTodayTV, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchAiringTodayTV());
    }, [dispatch]);

    if (status === 'loading' || !airingTodayTV) return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <>
            {airingTodayTV && <SwiperComponent data={airingTodayTV} title="Arriving Today" />}
        </>
    );
};

export default AiringTodayTV;
