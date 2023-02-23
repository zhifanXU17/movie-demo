import "./App.css";
import { useState } from "react";
import useSWR from "swr";
import { APIKEY, fetcher } from "./utils/index.js";

import Header from "./widgets/Header.jsx";
import Movie from "./widgets/Movie.jsx";

function getMovieInfo(movieId, MovieENDPOINT, fetcher) {
  const { data, error, isLoading } = useSWR(MovieENDPOINT, fetcher);
  return {
    movieInfo: data,
    movieError: error,
    isLoading,
  };
}

function App() {
  const [movieId, setMovieId] = useState(() => {
    const initialMovieId = JSON.parse(localStorage.getItem("movieId"));
    return initialMovieId || 157336;
  });
  const MovieENDPOINT = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&language=zh-CN`;
  const { movieInfo, movieError, isLoading } = getMovieInfo(
    movieId,
    MovieENDPOINT,
    fetcher
  );

  if (movieError) {
    return <div>请求出错</div>;
  }

  if (isLoading) {
    return <div>加载中...</div>;
  }

  const backgroundImage = `linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%), url(https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})`;

  return (
    <div
      className="App bg-no-repeat bg-cover text-neutral-50 h-full min-h-full container py-8 mx-auto max-w-full"
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <Header setMovieId={setMovieId} />
      <Movie
        posterLink={movieInfo.poster_path}
        title={movieInfo.title}
        tagline={movieInfo.tagline}
        overview={movieInfo.overview}
        genresList={movieInfo.genres}
        producerList={movieInfo.production_companies}
        releaseDate={movieInfo.release_date}
        runningTime={movieInfo.runtime}
        boxOffice={movieInfo.revenue}
        vote={movieInfo.vote_average}
      />
    </div>
  );
}

export default App;
