import React, {useEffect} from 'react';
import '../App.css';

const Filter = ({card, setFiltered, selectedGenre, setSelectedGenre}) => {
    useEffect(()=>{
        if(selectedGenre === 0){
            setFiltered(card);
            return;
        }
        const filtered = card.filter((movie)=> movie.genre_ids.icludes(selectedGenre))
        setFiltered(filtered);
    },[selectedGenre])


  return (
    <div className="filter-block">
        <button onChange={()=>setSelectedGenre(0)}>All</button>
        <button onChange={()=>setSelectedGenre(12)}>Adventure</button>
        <button onChange={()=>setSelectedGenre(35)}>Comedy</button>
        <button onChange={()=>setSelectedGenre(99)}>Documentary</button>     
    </div>
  )
}

export default Filter