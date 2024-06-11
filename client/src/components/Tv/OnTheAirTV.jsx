import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../swiper.css';
import { fetchOnTheAirTV } from '../../store/movieSlice';
import SwiperComponent from '../SwiperComponent';

const OnTheAirTV = () => {
    const dispatch = useDispatch();
    const { onTheAirTV, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchOnTheAirTV());
    }, [dispatch]);

    if (status === 'loading' || !onTheAirTV) return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <>
            {onTheAirTV && <SwiperComponent data={onTheAirTV} title="On The Air" />}
        </>
    );
};

export default OnTheAirTV;
