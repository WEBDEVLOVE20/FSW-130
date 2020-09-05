import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addMovies,
  selectMovies
} from './mediaSlice';


export function Movie() {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const [ newMovie, addMovie ] = useState('');
 //console.log(movies)

  return (
    <div>
        <div>
          <input
            type= "text"
            aria-label="Enter Movie"
            placeholder="Enter Movie"
            value= {newMovie}
            onChange={e => addMovie(e.target.value)}
          />
          <button
            aria-label="Add Movie"
            onClick={() => dispatch(addMovies(newMovie))}
          >
            Add Movie
          </button>
        </div>

        <div>
          <h1>{ movies }</h1>
        </div>

    </div>
  );
}
