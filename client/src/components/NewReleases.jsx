import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './swiper.css';
import { fetchNewReleases } from '../store/movieSlice';
import SwiperComponent from './SwiperComponent';

const NewReleases = () => {
    const dispatch = useDispatch();
    const { newReleases, status, error } = useSelector((state) => state.movies); // Use newReleases instead of trending

    useEffect(() => {
        dispatch(fetchNewReleases());
    }, [dispatch]);

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <>
            <SwiperComponent data={newReleases} title="New Releases" />
        </>
    );
};

export default NewReleases;
