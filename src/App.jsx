import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MovieList from './components/MovieList'

export default function App() {
  return (
    <BrowserRouter>
    <div className='bg-black text-white'>
    <Navbar/>
       <Hero/>
       <MovieList/>
    </div>
    </BrowserRouter>
  )
}
