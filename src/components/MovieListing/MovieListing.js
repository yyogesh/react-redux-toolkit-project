import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss'

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    console.log(movies);

    const renderMovies = movies.Response === 'True' ? (
        movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : <div className="movie-error">
        <h3>{movies.Error
        }</h3>
    </div>

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
        </div>
    )
}

export default MovieListing
