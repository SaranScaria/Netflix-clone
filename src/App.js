import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import {action,ComedyMovies,HorrorMovies,orginals, RomanceMovies, trending} from './urls'
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <div className='App'>
     <NavBar/>
     <Banner/>
    <RowPost url={orginals} title='netflix orginals'/>
    <RowPost url={trending} title='Trending' isSmall/>
    <RowPost url={action} title='Action Movies' isSmall/>
    <RowPost url={RomanceMovies} title='Romance Movies' isSmall/>
    <RowPost url={HorrorMovies} title='Horror Movies' isSmall/>
    <RowPost url={ComedyMovies} title='Comedy Movies' isSmall/>
    <RowPost url={action} title='Action Movies' isSmall/>
    <RowPost url={RomanceMovies} title='Romance Movies' isSmall/>
    <RowPost url={HorrorMovies} title='Horror Movies' isSmall/>
    <RowPost url={ComedyMovies} title='Comedy Movies' isSmall/>
    </div>
  )
}

export default App


