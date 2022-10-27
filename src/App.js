import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const fetchMoviesData = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/550?api_key=279af113db8abf9ba3623e4085ea611b');
    const movies = await data.json();
    console.log(movies)
  }


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
