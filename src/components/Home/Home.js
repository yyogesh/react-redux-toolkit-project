import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKEY } from '../../common/apis/MovieApiKey';

const Home = () => {
    useEffect(() => {
        const fetchMovie = async () => {
            const resposne = await movieApi.get(`?apikey=${APIKEY}&s=Matrix`);
            console.log(resposne);
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
