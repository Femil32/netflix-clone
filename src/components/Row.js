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
        height:'500',
        width:'100',
        playerVars:{
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.original_name || movie?.name || movie?.title|| '')
            .then(
                (url) => {
                    const urlPrams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlPrams.get('v'));

                }
            ).catch(err => console.log(err.message))

        }
    }

    return (
        <div className="relative mt-6">
            <h2 className="text-xl md:text-3xl font-semibold mb-2 text-white px-4">{title}</h2>
            <div className="movies_posters overscroll-y-hidden overflow-x-scroll p-4 ">
                {movies.map( (movie) => (
                    <div key={movie.id} onClick={() => handleClick(movie)} className={`relative w-40 md:w-44 text-white mr-4 transform transition-all cursor-pointer hover:scale-105 border-none outline-none rounded-sm ${isLarge?'h-68 md:h-72':'h-28'}`}>
                        <img key={movie.id} src={`${baseURL}${isLarge ? movie.poster_path : movie.backdrop_path ||  movie.poster_path}`} alt={movie.name} className="object-cover w-full h-full"/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg" alt="N" className={`absolute top-2 left-2 w-4 ${isLarge ?'block': 'hidden'}`} />
                    </div>
                    )
                )}
            </div> 
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
};

export default Row;
