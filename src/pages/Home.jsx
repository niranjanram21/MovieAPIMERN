import React, { useEffect } from 'react'
import './Home.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { useDispatch } from 'react-redux'
import { getGenres } from '../store/index'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
    }, []);

    return (
        <div>
            <div className='home-container'>
                <Header />
                <Hero />
            </div>

        </div>
    )
}

export default Home
