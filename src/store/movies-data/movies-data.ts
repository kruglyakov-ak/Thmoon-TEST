import { createReducer } from '@reduxjs/toolkit';
import { NavItems } from '../../const';
import { MoviesData } from '../../types/state';
import { loadGenres, loadMovies, setMoviesFilter, loadNowPlayingMovies } from '../action';

const initialState: MoviesData = {
  movies: [],
  nowPlayingMovies: [],
  genres: [],
  moviesFilter: NavItems.Popular,
};

const moviesData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      const { movies } = action.payload;
      state.movies = movies;
    })
    .addCase(loadNowPlayingMovies, (state, action) => {
      const { nowPlayingMovies } = action.payload;
      state.nowPlayingMovies = nowPlayingMovies;
    })
    .addCase(loadGenres, (state, action) => {
      const { genres } = action.payload;
      state.genres = genres;
    })
    .addCase(setMoviesFilter, (state, action) => {
      const { moviesFilter } = action.payload;
      state.moviesFilter = moviesFilter;
    });
});

export { moviesData };
