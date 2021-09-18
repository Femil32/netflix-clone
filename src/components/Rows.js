import React from 'react'
import requests from '../requests'
import Row from './Row'

function Rows() {
    return (
        <div>
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLarge/> 
            <Row title="Tranding Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies}/>
            <Row title="Documantries" fetchUrl={requests.fetchDocumantries}/>
        </div>
    )
}

export default Rows
