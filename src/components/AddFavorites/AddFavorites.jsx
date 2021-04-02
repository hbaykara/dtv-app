import React, { useContext } from "react";
import GlobalContext from '../../context/GlobalState';
import "./AddFavorites.scss";

const AddFavorites = () => {
  const {addFavoritesMovie} = useContext(GlobalContext);
  const {removeFavoritesMovie} = useContext(GlobalContext);

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
