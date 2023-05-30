import React from 'react'

import HomeButton from './../../Components/Reusable/HomeButton'
import MovieDetails from './../../Components/Reusable/MovieDetails'
import BackButton from '../../Components/Reusable/BackButton'


function MovieID () {

  return (
    <div className="max-w-5xl mx-auto text-white ">
        <div className="container mx-auto p-4 flex flex-col">
            <MovieDetails/>
        </div>
        <BackButton/>
        <HomeButton/>
    </div>
  )
}
export default MovieID
