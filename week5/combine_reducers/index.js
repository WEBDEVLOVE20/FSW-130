import store from "./redux/store.js";
import { addMovie, removeMovie, getAllMovies } from "./redux/movies.js";
import { addTvShow, removeTvShow, getAllTvShows } from "./redux/tvShows.js";

//ADD MOVIE
store.dispatch(addMovie("Fight Club"));
store.dispatch(addMovie("Red"));
store.dispatch(addMovie("Push"));
store.dispatch(addMovie("Bio-Dome"));

//ADD TV SHOW
store.dispatch(addTvShow("The Good Witch"));
store.dispatch(addTvShow("The Universe"));
store.dispatch(addTvShow("Ancient Aliens"));
store.dispatch(addTvShow("House"))

//REMOVE MOVIE
store.dispatch(removeMovie("Fight Club"));
store.dispatch(removeMovie("Push"));

//REMOVE TV SHOW
store.dispatch(removeTvShow("The universe"));

//GET ALL MOVIES
store.dispatch(getAllMovies());

//GET ALL TV SHOWS
store.dispatch(getAllTvShows());