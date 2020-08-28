const redux = require("redux");
const {combineReducers, createStore} = redux;
import moviesReducer from "./movies";
import tvShowsReducer from "./tvShows";


const rootReducer = combineReducers({
    movies: moviesReducer,
    tvShows: tvShowsReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})


export default store;