import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../swiper.css';
import { fetchPopularMovies, fetchTrailers } from '../../store/movieSlice';
import SwiperComponent from '../SwiperComponent';

const Popular = () => {
    const dispatch = useDispatch();
    const { popular, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const actionResult = await dispatch(fetchPopularMovies());
            if (fetchPopularMovies.fulfilled.match(actionResult)) {
                dispatch(fetchTrailers(actionResult.payload));
            }
        };

        fetchTrendingMovies();
    }, [dispatch]);

    if (status === 'loading' || !popular) return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <>
            {popular && <SwiperComponent data={popular} title="Popular Movies" />}

        </>
    );
};

export default Popular;
