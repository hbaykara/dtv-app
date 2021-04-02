import React from "react";
import "./MovieList.scss";
import MovieCardHeading from "../MovieCardHeading/MovieCardHeading";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({
  title,
  movie,
  movieType,
  favorites,
  addFavoritesMovie,
  removeFavoritesMovie,
  search,
}) => {
  return (
    <div className="container">
      <MovieCardHeading title={title} />
      <div className="movie-list">
        {movie
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <MovieCard
              key={item.id}
              movie={item}
              movieType={movieType}
              favorites={favorites}
              addFavoritesMovie={addFavoritesMovie}
              removeFavoritesMovie={removeFavoritesMovie}
            />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
