import './App.css';
import {useState, useEffect} from 'react'
import MovieCard from "./components/MovieCard";

function App() {

  const [card, setCard] = useState([])

  useEffect(() =>{
    fetchMoviesData()
  },[])

  const fetchMoviesData = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=279af113db8abf9ba3623e4085ea611b');
    const movies = await data.json();

    console.log(movies);
    setCard(movies.results);
  }


  return (
    <div className="container">
      {card.map((movie)=>{
        return <MovieCard />
      })}
      
    </div>
  );
}

export default App;
