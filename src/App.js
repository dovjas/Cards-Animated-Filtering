import './App.css'
import {useState, useEffect} from 'react'
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

    console.log(movies);
    setCard(movies.results);
    setFiltered(filtered.results)
  }


  return (
    <div className="container">
      <Filter 
        card={card} 
        setFiltered={setFiltered} 
        selectedGenre={selectedGenre} 
        setSelectedGenre={setSelectedGenre}
      />
        <div className="movies-block">
        {card.map((movie)=>{
          return <MovieCard key={movie.id} movie={movie}/>
        })}
      </div>
    </div>
  );
}

export default App;
