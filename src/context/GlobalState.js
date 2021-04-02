import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import { sectionsApi } from "../api";

// initial state
const initialState = {
  movies: [],
  favorites: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const fetchMovies = () => {
    dispatch({ type: "FETCH_MOVIE" });
  };

  const addFavoritesMovie = (movie, movieType) => {
    dispatch({ type: "ADD_FAVORITES_MOVIE", payload: movie, movieType });
  };

  const removeFavoritesMovie = (movie, movieType) => {
    dispatch({ type: "REMOVE_FAVORITES_MOVIE", payload: movie, movieType });
  };

  return (
    <GlobalContext.Provider
      value={{
        movielist: state.movielist,
        favorites: state.favorites,
        addFavoritesMovie,
        removeFavoritesMovie
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
