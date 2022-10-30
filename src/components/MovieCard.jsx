import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div>
        <h2>{movie.title}</h2>
        <h2>{movie.release_date}</h2>
        <img src={'https://image.tmdb.org/t/p/w500'+ movie.backdrop_path} alt="Movie poster" />
    </div>
  )
}

export default MovieCard