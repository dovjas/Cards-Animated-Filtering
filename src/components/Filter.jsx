import React, {useEffect} from 'react';
import '../App.css';

const Filter = ({card, setFiltered, selectedGenre, setSelectedGenre}) => {
    useEffect(()=>{
        if(selectedGenre === 0){
            setFiltered(card);
            return;
        }
        const filtered = card.filter((movie)=> movie.genre_ids.includes(selectedGenre))
        setFiltered(filtered);
    },[selectedGenre])


  return (
    <div className="filter-block">
        <button className={ selectedGenre === 0? "active":""} onClick={()=>setSelectedGenre(0)}>All</button>
        <button className={ selectedGenre === 12? "active":""} onClick={()=>setSelectedGenre(12)}>Adventure</button>
        <button className={ selectedGenre === 35? "active":""} onClick={()=>setSelectedGenre(35)}>Comedy</button>
        <button className={ selectedGenre === 18? "active":""} onClick={()=>setSelectedGenre(18)}>Drama</button>     
    </div>
  )
}

export default Filter