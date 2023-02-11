import React from "react";
import { useParams } from "react-router-dom";

// components
import MovieDetail from "../containers/MovieDetail";
import MovieContainer from "../containers/MovieContainer";

const MoviePage = () => {
  const params = useParams();
  const id = parseInt(params.id);
  return (
    <>
      <MovieDetail API={`/movie/${id}`} />
      <MovieContainer
        API={`/movie/${id}/similar`}
        to={customApi[1].to}
        text="More content like this"
      />
    </>
  );
};

const customApi = [
  {
    // route: `/movie/${id}`,
    to: "/",
  },
  {
    // route: `/movie/${id}/similar`,
    to: "/",
  },
];

export default MoviePage;
