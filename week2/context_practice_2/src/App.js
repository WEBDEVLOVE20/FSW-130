import React from "react";
//import Header from "./Header";
import {MovieContextProvider} from "./movieContext";
import MovieList from "./MovieList";

function App() {
  return (
      <div>
        <MovieContextProvider>
          <MovieList />
        </MovieContextProvider>
      </div>
  )
}

export default App;