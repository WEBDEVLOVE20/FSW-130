import React from 'react';
import { Movie } from './features/media/Movie';
import { TvShow } from './features/media/TvShow';
import './App.css';

function App() {
  return (
    <div className="App">
      <Movie/>
      <TvShow/>
    </div>
  );
}

export default App;
