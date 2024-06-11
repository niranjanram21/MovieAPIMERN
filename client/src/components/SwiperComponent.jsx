import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';


const SwiperComponent = ({ data, title }) => {
    const navigate = useNavigate();

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <>
            <h3 className="bg-gradient-to-r from-gray-200  to-gray-500 bg-clip-text text-transparent  md:p-4 lg:p-8 font-bold text-2xl">{title}</h3>
            <Swiper
                slidesPerView={3}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                spaceBetween={10}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    700: {
                        slidesPerView: 5,
                        slidesPerGroup: 2,
                    },
                    1000: {
                        slidesPerView: 8,
                        slidesPerGroup: 2,
                    },
                }}
                navigation={true}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper p-4"
            >
                {data.map((movie) => (
                    <SwiperSlide
                        key={movie.id}
                        className='hover:cursor-pointer hover:scale-105 transition duration-150 ease-in-out relative'
                        style={{ height: "250px" }}
                        onClick={() => handleMovieClick(movie.id)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="swiper-slide-img"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SwiperComponent;
