import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Trending from '../components/Trending'
import NewReleases from '../components/NewReleases'
import Popular from '../components/Popular'
import TopRated from '../components/TopRated'
import BlockbusterMovies from '../components/BlockbusterMovies'

const Home = () => {

    return (
        <div>
            <div className='home-container mb-4'>
                <Header />
                <Hero />
            </div>
            <Trending />
            <NewReleases />
            <BlockbusterMovies />
            <TopRated />
            <Popular />
        </div>
    )
}

export default Home
