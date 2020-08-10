import React from "react";
import {MovieContextConsumer} from "./movieContext";


class MovieList extends React.Component {

    state = {
        newMovie: "",
        allMovies: []
    }


    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name] : value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        let addMovie = {
            newMovie: this.state.newMovie
        }
        this.setState({ 
            allMovies: [addMovie, ...this.state.allMovies],
            newMovie: ""
        })
    }



    render() {    
        return (
            <div>
                    <MovieContextConsumer>
                        {({moviesArr}) => (
                            <div>  
                                <form onSubmit={this.handleSubmit}>
                                <input
                                    type="text"
                                    name="newMovie"
                                    placeholder="New movies"
                                    value={this.state.newMovie}
                                    onChange={this.handleChange}
                                />
                                <button>Add Movie</button>
                                </form>
                               <div>
                                <p>{allMovies}</p>
                                <p>{moviesArr}</p>
                                </div>
                            </div> 
                        )}
                    </MovieContextConsumer>
            </div>
        )
    }
}

export default MovieList;