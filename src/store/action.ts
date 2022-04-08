import { createAction } from '@reduxjs/toolkit';
import { NavItems } from '../const';
import { ActionType } from '../types/action';
import { Movie } from '../types/movie';

const loadMovies = createAction(
  ActionType.LoadMovies,
  (movies: Movie[]) => ({
    payload: {
      movies,
    },
  })
);

const setMoviesFilter = createAction(
  ActionType.SetMoviesFilter,
  (moviesFilter: NavItems) => ({
    payload: {
      moviesFilter,
    },
  })
);

export { setMoviesFilter, loadMovies };
