import { createReducer } from '@reduxjs/toolkit';
import { NavItems } from '../../const';
import { MoviesData } from '../../types/state';
import { loadMovies, setMoviesFilter } from '../action';

const initialState: MoviesData = {
  movies: [],
  moviesFilter: NavItems.Popular,
};

const moviesData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      const { movies } = action.payload;
      state.movies = movies;
    })
    .addCase(setMoviesFilter, (state, action) => {
      const { moviesFilter } = action.payload;
      state.moviesFilter = moviesFilter;
    });
});

export { moviesData };
