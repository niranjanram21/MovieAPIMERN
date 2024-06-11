import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../swiper.css';
import { fetchBlockbusterMovies } from '../../store/movieSlice';
import SwiperComponent from '../SwiperComponent';

const BlockbusterMovies = () => {
    const dispatch = useDispatch();
    const { blockbusters, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchBlockbusterMovies());
    }, [dispatch]);

    if (status === 'loading' || !blockbusters) return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <>
            {blockbusters && <SwiperComponent data={blockbusters} title="Blockbuster Movies" />}
        </>
    );
};

export default BlockbusterMovies;
