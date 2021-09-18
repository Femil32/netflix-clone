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
        <header style={{
            backgroundSize:'cover',
            backgroundImage:`linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:'center center', 
        }} className="main-header">
            <div className="absolute bottom-16 max-w-sm md:max-w-sm z-10">
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
