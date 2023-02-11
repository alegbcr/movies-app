import React from "react";

// image
import image from "../assets/404.svg";

const NotFound = () => {
  return (
    <>
      <picture style={imageContainer}>
        <img style={imageStyle} src={image} alt="Not Found" />
      </picture>
    </>
  );
};

// Styles
const imageContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "93vh",
  width: "100vw",
};

const imageStyle = {
  display: "flex",
  width: "75%",
};

export default NotFound;
