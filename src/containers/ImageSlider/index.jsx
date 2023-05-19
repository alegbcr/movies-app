import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// Custom Hooks
import useWindowDimension from "../../hooks/useWindowDimensions.js";
// components
import { Button } from "../../components/Button";
// icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// styles
import "./ImageSlider.css";

const ImageSlider = ({ movies }) => {
  const { width } = useWindowDimension();
  const navigate = useNavigate();
  const slideShow = useRef(null);

  const handleGoToPrevious = () => {
    // Check if the slideShow has elements
    if (slideShow.current.children.length > 0) {
      // Get the last element on slideShow
      const index = slideShow.current.children.length - 1;
      const lastElement = slideShow.current.children[index];
      slideShow.current.insertBefore(lastElement, slideShow.current.firstChild);
      // Set transition to slideShow
      slideShow.current.style.transition = `none`;
      const slideSize = slideShow.current.children[0].offsetWidth;
      // Move slideShow to next
      slideShow.current.style.transform = `translateX(-${slideSize}px)`;

      // Transition's slideShow
      setTimeout(() => {
        slideShow.current.style.transition = `300ms ease-out all`;
        slideShow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  const handleGoToNext = () => {
    // Check if the slideShow has elements
    if (slideShow.current.children.length > 0) {
      // Get the first element on slideShow
      const firstElement = slideShow.current.children[0];
      // Set transition to slideShow
      slideShow.current.style.transition = `300ms ease-out all`;
      const slideSize = slideShow.current.children[0].offsetWidth;
      // Move slideShow to next
      slideShow.current.style.transform = `translateX(-${slideSize}px)`;

      // Transition's slideShow
      const transition = () => {
        // Reset the position of slideShow
        slideShow.current.style.transition = "none";
        slideShow.current.style.transform = `translateX(0)`;
        // Get first element to send to the end
        slideShow.current.appendChild(firstElement);
        // Remove eventListener when finish the animation
        slideShow.current.removeEventListener("transitionend", transition);
      };

      // eventListener when finish the animation
      slideShow.current.addEventListener("transitionend", transition);
    }
  };

  return (
    <>
      <div className="slider__container">
        <FaChevronLeft
          className="slider_arrow--left"
          onClick={() => handleGoToPrevious()}
        />
        <FaChevronRight
          className="slider_arrow--right"
          onClick={() => handleGoToNext()}
        />
        {width <= 425 ? (
          <div ref={slideShow}>
            {movies.map((movie) => (
              <picture key={movie.id} className={`slider__container--images`}>
                <img
                  className="slide--image"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="information__container">
                  <h2 className="information__title">{movie.title}</h2>
                  <div className="information__description">
                    <div className="information__description--items">
                      <p>{movie.original_language}</p>
                      <p>{movie.release_date}</p>
                      <p>{movie.vote_average}</p>
                    </div>
                    <Button
                      className="information__button"
                      handleAction={() => navigate(`/movie/${movie.id}`)}
                      text="Más información"
                    />
                  </div>
                  <p className="information__overview">{movie.overview}</p>
                </div>
              </picture>
            ))}
          </div>
        ) : (
          <div ref={slideShow}>
            {movies.map((movie) => (
              <picture key={movie.id} className="slider__container--images">
                <img
                  className="slide--image"
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <div className="information__container">
                  <div style={{ width: "80%" }}>
                    <h2 className="information__title">{movie.title}</h2>
                    <div className="information__description">
                      <div className="information__description--items">
                        <p>{movie.original_language}</p>
                        <p>{movie.release_date}</p>
                        <p>{movie.vote_average}</p>
                      </div>
                      <Button
                        className="information__button"
                        handleAction={() => navigate(`/movie/${movie.id}`)}
                        text="Más información"
                      />
                    </div>
                    <p className="information__overview">{movie.overview}</p>
                  </div>
                </div>
              </picture>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ImageSlider;
