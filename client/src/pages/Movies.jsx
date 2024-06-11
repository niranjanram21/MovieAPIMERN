import React from 'react'
import Header from '../components/Header'
import NewReleases from '../components/Movies/NewReleases'
import BlockbusterMovies from '../components/Movies/BlockbusterMovies'
import Popular from '../components/Movies/Popular'

const Movies = () => {
    return (
        <>
            <Header />
            <div className="py-4 px-8 mb-4">
                <NewReleases />
                <BlockbusterMovies />
                <Popular />
            </div>

        </>
    )
}

export default Movies
