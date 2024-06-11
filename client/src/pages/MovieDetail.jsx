import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../store/movieSlice';
import Header from '../components/Header';
// import Footer from '../components/Footer';

const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movieDetails = useSelector((state) => state.movies.movieDetails);
    const status = useSelector((state) => state.movies.status);
    const error = useSelector((state) => state.movies.error);

    useEffect(() => {
        if (id) {
            dispatch(fetchMovieDetails(id));
        }
    }, [dispatch, id]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Header />
            <div className="text-gray-200 mb-8">
                <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
                        alt={movieDetails.title}
                        className="w-full h-full object-cover opacity-35"
                    />
                    <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex flex-row w-full gap-8 items-end">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                            className="h-48 lg:h-96 w-28 md:w-32 lg:w-1/5 shadow-lg"
                        />
                        <div className="flex flex-col gap-1 lg:gap-2">
                            <h1 className="text-2xl lg:text-4xl bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent font-bold mb-4 lg:mb-0">{movieDetails.title}</h1>
                            <p className="hidden md:block text-sm lg:text-lg w-full md:w-3/4 lg:w-4/5 italic">{movieDetails.overview}</p>
                            <div className="hidden md:flex flex-row gap-2 lg:flex-col">
                                <p className="text-sm lg:text-lg">Vote Average: <span className='font-bold text-red-400 text-xl'>{movieDetails.vote_average}</span></p>
                                <p className="text-sm lg:text-lg">Vote Count: <span className='font-bold text-red-400 text-xl'>{movieDetails.vote_count}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-4 md:hidden px-4">
                    <p className="mt-4 text-sm italic">{movieDetails.overview}</p>
                    <p className="mt-4 text-sm">Vote Average: <span className='font-bold text-red-400 text-xl'>{movieDetails.vote_average}</span></p>
                    <p className="mt-4 text-sm">Vote Count: <span className='font-bold text-red-400 text-xl'>{movieDetails.vote_count}</span></p>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default MovieDetail;
