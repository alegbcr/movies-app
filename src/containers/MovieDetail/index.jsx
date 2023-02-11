import React from "react";
import { useGetMovieById, useGetCategories } from "../../hooks/useCallAPI";

// styles
import "./MovieDetail.css";

const MovieDetail = (props) => {
  const movie = useGetMovieById(props.API);
  const categories = useGetCategories(props.API);

  return (
    <>
      <div className="movie-detail__container">
        <picture className="movie-detail-image__container">
          <img
            className="movie-detail__image"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </picture>
        <div className="movie-detail-information__container">
          <h2 className="movie-detail-information__title">{movie.title}</h2>
          <div className="movie-detail-information__description">
            <p>{movie.language}</p>
            <p>{movie.date}</p>
            <p>{movie.voting}</p>
          </div>
          <p className="movie-detail-information__overview">{movie.overview}</p>
        </div>
        <ul className="movie-detail-categories__list">
          {categories.map((category) => (
            <li key={category.id} className="movie-detail-category__item">
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieDetail;
