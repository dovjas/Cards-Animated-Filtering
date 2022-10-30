import React, {useEffect} from 'react'
import '../App.css'

const Filter = () => {
  return (
    <div className="filter-block">
        <button>All</button>
        <button>Thriller</button>
        <button>Action</button>
        <button>Romance</button>     
    </div>
  )
}

export default Filter