import React from 'react';
import {motion} from 'framer-motion';
const MovieCard = ({movie}) => {
  return (
    <motion.div layout>
        <h2>{movie.title}</h2>
        <h2>{movie.release_date}</h2>
        <img src={'https://image.tmdb.org/t/p/w500'+ movie.backdrop_path} alt="Movie poster" />
    </motion.div>
  )
}

export default MovieCard