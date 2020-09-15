import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <header>
                <div className="container">
                <div className="inner-content">
                <div className="brand">
                    
                    <img className="movie" src="https://img.icons8.com/wired/64/000000/movie-projector.png" alt="movie projector"/>
                </div>

                <ul className="nav-links">
                    <li>
                    <Link to="/">WatchList</Link>
                    </li>

                    <li>
                    <Link to="/watched">Watched</Link>
                    </li>

                    <li>
                    <Link to="/add" className="btn btn-main">
                        + Add
                    </Link>
                    </li>
                </ul>
                </div>
                </div>
            </header>
        </div>
    )
}
