import React from "react";
import { useNavigate } from "react-router-dom";
import { VerticalImage } from "./styles.jsx";

export const PosterImage = ({ movie, style }) => {
  const navigate = useNavigate();
  return (
    <>
      <VerticalImage
        style={style}
        onClick={() => navigate(`/movie/${movie.id}`)}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
    </>
  );
};
