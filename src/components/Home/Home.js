import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKEY } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await movieApi.get(`?apikey=${APIKEY}&s=Matrix`)
                .catch((e) => {
                    console.log('error', e);
                });
            dispatch(addMovies(response.data));
            console.log(response.data);
        }
        fetchMovie();
    }, [])
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    )
}

export default Home
