import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";

import { PosterImage } from "../components/PosterImage";
import AppContext from "../context/AppContext";

import { useGetMoviesBySearch } from "../hooks/useCallAPI";

const SearchPage = () => {
  const { state } = useContext(AppContext);
  const [search] = useSearchParams();
  const queryMovie = search.get("query");
  const movies = useGetMoviesBySearch(state.routes.search, queryMovie);

  if (movies) {
    return (
      <>
        <div style={containerColumn}>
          <h2>{`Estás buscando ${queryMovie}`}</h2>
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
  } else {
    return (
      <>
        <h2>{`Estás buscando ${queryMovie}`}</h2>
      </>
    );
  }
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

export default SearchPage;
