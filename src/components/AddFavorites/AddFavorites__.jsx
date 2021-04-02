import React from "react";
import "./AddFavorites.scss";

const AddFavorites = ({
  movie,
  movieType,
  favorites,
  addFavoritesMovie,
  removeFavoritesMovie,
}) => {
  const isFavorited = favorites.some(
    (favorite) => favorite.id === movie.id && favorite.movieType === movieType
  );

  return (
    <>
      {isFavorited ? (
        <div
          className="add-favorites add-favorites__active"
          onClick={() => removeFavoritesMovie(movie, movieType)}
        >
          <span></span>
          <span></span>
        </div>
      ) : (
        <div
          className="add-favorites"
          onClick={() => addFavoritesMovie(movie, movieType)}
        >
          <span></span>
          <span></span>
        </div>
      )}
    </>
  );
};

export default AddFavorites;
