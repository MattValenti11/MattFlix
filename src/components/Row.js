import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import s from "../styles/Row.module.css";


const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    //I need to run one piece of code when this component loads;
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results); //Movie array
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=b736078c4628dd3f7244787754bc38b4`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

  return (
    <div className={s.row}>
      <h2>{title}</h2>

      <div className={s.row_posters}>
        {movies &&
          movies.map((movie) => (
            <img
              key={movie.id}
              className={`${s.row_poster} ${isLargeRow && s.row_posterLarge} ${
                movie.name
              }}`}
              src={`${baseImgUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
