import React from "react";
import { PosterImage } from "../components/PosterImage";
import { useGetMovies } from "../hooks/useCallAPI";

const TrendingPage = () => {
  const movies = useGetMovies("/trending/movie/day");
  return (
    <>
      <div style={containerColumn}>
        <h2>Trending Page</h2>
        <picture style={imageContainer}>
          {movies.map((movie) => (
            <PosterImage
              style={{ maxHeight: "250px" }}
              key={movie.id}
              movie={movie}
            />
          ))}
        </picture>
      </div>
    </>
  );
};

const containerColumn = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  width: "100vw",
  height: "93vh",
};

const imageContainer = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  overflow: "scroll",
  height: "100%",
};

export default TrendingPage;
