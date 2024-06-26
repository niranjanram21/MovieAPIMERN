import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import LoginSignup from './pages/LoginSignup'
import Home from './pages/Home'
import TV from './pages/TV'
import Movies from './pages/Movies'
import Mylist from './pages/Mylist'
import MovieDetail from './pages/MovieDetail'
import SearchResults from './pages/SearchResults'
import GenreMovies from './components/GenreMovies'
import GenreTV from './components/GenreTV'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<LoginSignup />}></Route> */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/tv' element={<TV />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/mylist' element={<Mylist />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/movies/genre/:genreId" element={<GenreMovies />} />
        <Route path="/tv/genre/:genreId" element={<GenreTV />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
