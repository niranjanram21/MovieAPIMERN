import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../swiper.css';
import { fetchBlockbusterMovies, fetchTrailers } from '../../store/movieSlice';
import SwiperComponent from '../SwiperComponent';

const BlockbusterMovies = () => {
    const dispatch = useDispatch();
    const { blockbusters, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const actionResult = await dispatch(fetchBlockbusterMovies());
            if (fetchBlockbusterMovies.fulfilled.match(actionResult)) {
                dispatch(fetchTrailers(actionResult.payload));
            }
        };

        fetchTrendingMovies();
    }, [dispatch]);

    if (status === 'loading' || !blockbusters) return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <>
            {blockbusters && <SwiperComponent data={blockbusters} title="BlockBuster Movies" />}
        </>
    );
};

export default BlockbusterMovies;
