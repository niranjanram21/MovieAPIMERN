import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import LoginSignup from './pages/LoginSignup'
import Home from './pages/Home'
import TV from './pages/TV'
import Movies from './pages/Movies'
import Mylist from './pages/Mylist'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<LoginSignup />}></Route> */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/tv' element={<TV />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/mylist' element={<Mylist />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
