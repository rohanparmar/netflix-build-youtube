import React from 'react'
import "./Banner.css"
import axios from './axios';
import { useState, useEffect } from 'react';
import requests from "./Requests";

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + "..." : string;
    }


  return (
    <header className="banner" 
    style={{
        // backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        }}>

        <div className="banner_contents">
            {/* Title */}
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">

                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
                {truncate(movie?.overview, 150)}
            </h1>
        </div>


        <div className="banner--fadeBottom" />

    </header>
  )
}

export default Banner