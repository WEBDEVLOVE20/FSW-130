
export function addTvShow(movie) {
    return {
        type: "ADD_TV_SHOW",
        payload: movie
    }
}

export function removeTvShow(movie) {
    return {
        type: "REMOVE_TV_SHOW",
        payload: movie
    }
}

export default function tvShowReducer(tvShows = [], action) {
    switch(action.type) {
        case "ADD_TV_SHOW":
            return [...tvShows, action.payload]
        case "REMOVE_TV_SHOW": {            
            const updatedArr = tvShows.filter(movie => movie.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        default:
            return tvShows
    }
}