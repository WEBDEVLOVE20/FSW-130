import React from "react";
import movieData from "./movieData.json"
const {Provider, Consumer} = React.createContext();

class MovieContextProvider extends React.Component {

    state = {
        movies: movieData
    }
    
    changeMovies = (movies) => {
        this.setState({movies})
    }
    
    render() {
        
        const {movies} = this.state;
        const moviesArr = movies.map(movie => <div key={movie}>{movie.title}</div>)

        return (
            <div>
            <Provider value={{moviesArr, changeMovies: this.changeMovies}}>
                {this.props.children}
            </Provider>
            </div>
        )
    }
}

export {MovieContextProvider, Consumer as MovieContextConsumer};