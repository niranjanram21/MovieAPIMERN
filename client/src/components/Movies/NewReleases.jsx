import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../swiper.css';
import { fetchNewReleases, fetchTrailers } from '../../store/movieSlice';
import SwiperComponent from '../SwiperComponent';

const NewReleases = () => {
    const dispatch = useDispatch();
    const { newReleases, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const actionResult = await dispatch(fetchNewReleases());
            if (fetchNewReleases.fulfilled.match(actionResult)) {
                dispatch(fetchTrailers(actionResult.payload));
            }
        };

        fetchTrendingMovies();
    }, [dispatch]);

    if (status === 'loading' || !newReleases) return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <>
           { newReleases && <SwiperComponent data={newReleases} title="New Releases" />}
        </>
    );
};

export default NewReleases;
