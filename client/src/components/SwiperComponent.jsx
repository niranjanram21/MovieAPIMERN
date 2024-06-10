import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const Swiper1 = ({ data, title }) => {
    const [hoveredMovie, setHoveredMovie] = useState(null);

    const handleMouseEnter = (movie) => {
        setHoveredMovie(movie);
    };

    const handleMouseLeave = () => {
        setHoveredMovie(null);
    };

    return (
        <>
            <h2 className="text-white md:p-4 lg:p-8 font-bold text-3xl">{title}</h2>
            <Swiper
                slidesPerView={3}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                spaceBetween={8}
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
                scrollbar={true}
                navigation={true}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper p-8"
            >
                {data.map((movie) => (
                    <SwiperSlide
                        key={movie.id}
                        className='hover:cursor-pointer hover:scale-105 transition duration-200 ease-in-out relative'
                        onMouseEnter={() => handleMouseEnter(movie)}
                        onMouseLeave={handleMouseLeave}
                        style={{ height: "250px" }}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="swiper-slide-img"
                        />
                        {hoveredMovie === movie && movie.trailerUrl && (
                            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={movie.trailerUrl}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Trailer"
                                ></iframe>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Swiper1;
