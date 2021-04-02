import React, {useContext} from 'react';
import MovieList from "../MovieList/MovieList";
import {GlobalContext} from '../../context/GlobalState';

const Home = () => {
  const {movies} = useContext(GlobalContext);

  console.log(movies);
  return (
    <>
       {movies
        .sort((a, b) => a.order - b.order)
        .map((movie) => (
          <MovieList
          />
        ))}
    </>
  )
}

export default Home
