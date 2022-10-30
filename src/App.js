import './App.css'
import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import MovieCard from "./components/MovieCard";
import Filter from "./components/Filter";

function App() {

  const [card, setCard] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedGenre,setSelectedGenre] = useState(0);

  useEffect(() =>{
    fetchMoviesData()
  },[]);

  const fetchMoviesData = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=279af113db8abf9ba3623e4085ea611b');
    const movies = await data.json();

    setCard(movies.results);
    setFiltered(movies.results);
  }


  return (
    <div className="container">
      <Filter 
        card={card} 
        setFiltered={setFiltered} 
        selectedGenre={selectedGenre} 
        setSelectedGenre={setSelectedGenre}
      />
        <motion.div 
          animate={{opacity:1}} 
          initial={{opacity:0}}
          exit={{opacity:0}}
          layout 
          className="movies-block"
        >
          {filtered.map((movie)=>{
            return <MovieCard key={movie.id} movie={movie}/>
          })}
        </motion.div>
    </div>
  );
}

export default App;
