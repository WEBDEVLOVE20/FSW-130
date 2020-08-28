
export function addMovie(movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

export function removeMovie(movie) {
    return {
        type: "REMOVE_MOVIE",
        payload: movie
    }
}

export default function moviesReducer(movies = [], action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...movies, action.payload]
        case "REMOVE_MOVIE": {            
            const updatedArr = movies.filter(movie => movie.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        default:
            return movies
    }
}


