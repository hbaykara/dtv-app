import React from "react";
import "./MovieCardHeading.scss";

const MovieCardHeading = ({title}) => {
  return (
      <h2 className="movie-card-heading">{title}</h2>
  );
};

export default MovieCardHeading;
