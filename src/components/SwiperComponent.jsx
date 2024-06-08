// src/components/TrendingMovies.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const SwiperComponent = ({ data, title }) => {

    return (
        <>
            <h2 className="text-white p-4 font-bold text-3xl">{title}</h2>
            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                spaceBetween={5}
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
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper p-8"
            >
                {data.map((movie) => (
                    <SwiperSlide key={movie.id} className='' style={{ height: "250px" }}>
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
