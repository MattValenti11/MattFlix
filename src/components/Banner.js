import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../requests";
import s from "../styles/Banner.module.css";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className={s.banner}
      style={{
        // objectFit: "contain",
        backgroundSize: "cover",
        width: "auto",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/p1F51Lvj3sMopG948F5HsBbl43C.jpg")`,
        backdropPosition: "center center",
        overflow: "auto",
      }}
    >
      <div className={s.banner_contents}>
        <div className={s.banner_title}>{"Thor: Love and Thunder"}</div>
        <h1 className={s.banner_description}>
          {truncate(
            " finds Thor (Chris Hemsworth) on a journey unlike anything he's ever faced -- a quest for inner peace. But his retirement is interrupted by a galactic killer known as Gorr the God Butcher (Christian Bale), who seeks the extinction of the gods.",
            300
          )}
        </h1>

        <div className={s.banner_button}>
          <button className={s.banner_btn}>Play</button>
        </div>
      </div>
      <div className={s.banner_fadeBottom} />
    </header>
  );
}

export default Banner;
