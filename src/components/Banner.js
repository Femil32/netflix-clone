import axios from '../axios';
import React, { useEffect, useState } from 'react'
import requests from "../requests";


function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get(requests.fetchNetflixOriginals);
            const randomMovie = req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]
            setMovie(randomMovie)
            return req;
        };
        fetchData();
    }, [])

    function truncate(str,n) {
        return str?.length > n ? str.substr(0, n-1) + '...': str;
     };

    return (
        <header className="main-header relative">
            <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}`} alt="{movie.name}" className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat h-full w-full"/>
            <div className="absolute bottom-16 max-w-sm md:max-w-3xl z-10">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-4">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="mb-4">
                    <button className="banner-btn">Play</button>
                    <button className="banner-btn">My List</button>
                </div>
                <p className="font-sans tracking-wide">{truncate(movie?.overview,150)}</p>
            </div>
            <div className="bottom-gradient absolute bottom-0 left-0 w-full h-24 md:h-28 z-0"></div>
        </header>
    )
}

export default Banner
