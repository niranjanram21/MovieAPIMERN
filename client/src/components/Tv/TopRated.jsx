import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../swiper.css';
import { fetchTopRatedMovies, fetchTrailers } from '../../store/movieSlice';
import SwiperComponent from '../SwiperComponent';

const TopRated = () => {
    const dispatch = useDispatch();
    const { topRated, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const actionResult = await dispatch(fetchTopRatedMovies());
            if (fetchTopRatedMovies.fulfilled.match(actionResult)) {
                dispatch(fetchTrailers(actionResult.payload));
            }
        };

        fetchTrendingMovies();
    }, [dispatch]);

    if (status === 'loading' || !topRated) return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <>
            {topRated && <SwiperComponent data={topRated} title="Top Rated movies" />
            }
        </>
    );
};

export default TopRated;
