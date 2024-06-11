import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Trending from '../components/all/Trending'
import NewReleases from '../components/Movies/NewReleases'
import Popular from '../components/Movies/Popular'
import TopRated from '../components/Tv/TopRated'
import BlockbusterMovies from '../components/Movies/BlockbusterMovies'
import Footer from '../components/Footer'

const Home = () => {

    return (
        <div>
            <div className='home-container mb-6'>
                <Header />
                <Hero />
            </div>
            <div className="py-4 px-8 mb-4">
                <Trending />
                <NewReleases />
                <BlockbusterMovies />
                <TopRated />
                <Popular />
            </div>
            <Footer />
        </div>
    )
}

export default Home
