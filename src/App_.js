import React, { useState, useEffect } from "react";
import "./App.scss";
import Layout from "./hoc/Layout";
import Hero from "./components/Hero/Hero";
import MovieList from "./components/MovieList/MovieList";
import { sectionsApi } from "./api";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const getMovie = async () => {
    const response = await fetch(sectionsApi);
    const responseJSON = await response.json();
    setMovies(responseJSON);
  };

  useEffect(() => {
    getMovie();
  }, []);

  // Favorites
  const [favorites, setFavorites] = useState([]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favorites-movie", JSON.stringify(items));
  };

  const addFavoritesMovie = (movie, movieType) => {
    const newMovie = { ...movie, movieType };
    const newFavoritesList = [...favorites, newMovie];

    setFavorites(newFavoritesList);
    saveToLocalStorage(newFavoritesList);
  };

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem("favorites-movie"));

    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  const removeFavoritesMovie = (movie, movieType) => {
    const newFavoritesList = favorites.filter(
      (favorite) => favorite.id !== movie.id || favorite.movieType !== movieType
    );
    setFavorites(newFavoritesList);
    saveToLocalStorage(newFavoritesList);
  };

  return (
    <Layout 
      search={search} 
      setSearch={setSearch}
    >
      <Hero />
      {movies
        .sort((a, b) => a.order - b.order)
        .map((movie) => (
          <MovieList
            key={movie.id}
            title={movie.title}
            movie={movie.data}
            movieType={movie.id}
            addFavoritesMovie={addFavoritesMovie}
            removeFavoritesMovie={removeFavoritesMovie}
            favorites={favorites}
            search={search} 
          />
        ))}
      {favorites.length > 2 && (
        <MovieList key={favorites.id} title="Favoriler" movie={favorites} search={search} />
      )}
    </Layout>
  );
}

export default App;
