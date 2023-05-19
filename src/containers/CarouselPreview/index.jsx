import React from "react";
import { useGetMovies } from "../../hooks/useCallAPI";
import ImageSlider from "../ImageSlider";

// styles
import "./CarouselPreview.css";

const CarouselPreview = (props) => {
  const movies = useGetMovies(props.API);

  return (
    <div className="carousel__container--mobile">
      <ImageSlider movies={movies} />
    </div>
  );
};

export default CarouselPreview;
