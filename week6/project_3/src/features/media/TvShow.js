import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTvShows,
  selectTvShows
} from './mediaSlice';


export function TvShow() {
  const tvShows = useSelector(selectTvShows);
  const dispatch = useDispatch();
  const [ newTvShow, addTvShow ] = useState('');


  return (
    <div>

    <div>
        <input
          type= "text"
          aria-label="Enter Tv Show"
          placeholder="Enter Tv Show"
          value={newTvShow}
          onChange={e => addTvShow(e.target.value)}
        />
        <button
          aria-label="Add Tv Show"
          onClick={() => dispatch(addTvShows(newTvShow))}
        >
          Add Tv Show
        </button>
      </div>

      <div>
        <h1>{ tvShows }</h1>
      </div>

    </div>
  );
}
