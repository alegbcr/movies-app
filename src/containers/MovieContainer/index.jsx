import React from "react";
import { Link } from "react-router-dom";
import { useGetMovies } from "../../hooks/useCallAPI";

// components
import { PosterImage } from "../../components/PosterImage";

// style
import "./MovieContainer.css";

const MoviesContainer = (props) => {
  const movies = useGetMovies(props.API);

  return (
    <div className={`movies-container-${props.direction}`}>
      <div className="title-container">
        <h4 className="title-preview">{props.text}</h4>
        <Link className="link-preview" to={props.to}>
          ver más
        </Link>
      </div>
      <picture className="movies-poster-container-row">
        {movies.map((movie) => (
          <PosterImage key={movie.id} movie={movie} />
        ))}
      </picture>
    </div>
  );
};

export default MoviesContainer;
