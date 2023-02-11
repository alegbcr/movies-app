import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PosterImage } from "../components/PosterImage";
import AppContext from "../context/AppContext";
import { useGetMoviesByCategories } from "../hooks/useCallAPI";

const CategoryPage = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const { movies, getMovies } = useGetMoviesByCategories(
    `${state.routes.categories}`,
    id
  );

  return (
    <>
      <div style={containerColumn}>
        <h2>Category Movies</h2>
        <picture style={imageContainer}>
          {movies.map((movie) => (
            <PosterImage
              action={getMovies}
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

// Styles
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

export default CategoryPage;
