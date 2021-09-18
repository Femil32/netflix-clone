import React, { useEffect, useState } from 'react'
import axios from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'


function Row({title,fetchUrl,isLarge}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('')
    const baseURL = 'https://image.tmdb.org/t/p/original'

    // useEffect for fetch api
    useEffect(() => {

        async function fetchData() {
            const req = await axios.get(fetchUrl);
            setMovies(req.data.results)
            return req;
        };
        fetchData();
    }, [fetchUrl])

    const opts = {
        height:'390',
        width:'100%',
        playerVars:{
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.name || movie?.title|| '')
            .then(
                (url) => {
                    const urlPrams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlPrams.get('v')); 
                }
            ).catch(err => console.log(err.message))
        }
    }

    return (
        <div className="mt-6">
            <h2 className="text-3xl font-semibold mb-2 text-white px-4">{title}</h2>
            <div className="movies_posters flex overflow-y-hidden overflow-x-auto p-4">
                {movies.map( (moive) => (
                    <img onClick={() => handleClick(moive)} key={moive.id} src={`${baseURL}${isLarge ? moive.poster_path : moive.backdrop_path}`} alt={moive.name} className="object-contain mr-4 w-36 md:w-44 transform transition-all cursor-pointer hover:scale-105"/>
                    )
                )}
            </div> 
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
};

export default Row;
