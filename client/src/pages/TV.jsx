import React from 'react'
import Header from '../components/Header'
import AiringTodayTV from '../components/Tv/AiringTodayTV'
import Footer from '../components/Footer'
import OnTheAirTV from '../components/Tv/OnTheAirTV'
import TopRated from '../components/Tv/TopRated'
import PopularTV from '../components/Tv/PopularTV'

const TV = () => {
    return (
        <>
            <Header />
            <div className="py-4 px-8 mb-4">
                <OnTheAirTV />
                <TopRated />
                <AiringTodayTV />
                <PopularTV />
            </div>
            <Footer />
        </>

    )
}

export default TV
