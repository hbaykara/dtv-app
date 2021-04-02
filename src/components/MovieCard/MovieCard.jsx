import React from "react";
import Moment from "moment";
import "./MovieCard.scss";
import AddFavorites from "../AddFavorites/AddFavorites";

const MovieCard = ({
  movie,
  movieType,
  favorites,
  addFavoritesMovie,
  removeFavoritesMovie,
}) => {
  return (
    <>
      <div className="movie-card">
        <img
          className="movie-card__image"
          src={`/images/${movie.image}`}
          alt=""
        />
        <div className="movie-card__info">
          <h3 className="movie-card__name">{movie.title}</h3>
          <p className="movie-card__desc">{movie.subTitle}</p>
          <time
            className="movie-card__published-date"
            dateTime={Moment(movie.published_date).format("YYYY")}
          >
            {Moment(movie.published_date).format("YYYY")}
          </time>
        </div>
        <div className="movie-card__favourites">
          {favorites && (
            <AddFavorites
              movie={movie}
              movieType={movieType}
              favorites={favorites}
              addFavoritesMovie={addFavoritesMovie}
              removeFavoritesMovie={removeFavoritesMovie}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
