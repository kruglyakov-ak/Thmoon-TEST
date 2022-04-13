import { createReducer } from '@reduxjs/toolkit';
import { NavItems } from '../../const';
import { MoviesData } from '../../types/state';
import {
  loadGenres,
  loadMovies,
  setMoviesFilter,
  loadNowPlayingMovies,
  loadMovieDetails,
  setIsMovieDetailsLoaded,
  setIsMoviesLoaded,
  setIsNowPlayingMoviesLoaded,
  loadSearchResult
} from '../action';

const initialState: MoviesData = {
  movies: [],
  nowPlayingMovies: [],
  genres: [],
  moviesFilter: NavItems.Popular,
  movieDetails: null,
  isMovieDetailsLoaded: false,
  isMoviesLoaded: false,
  isNowPlayingMoviesLoaded: false,
  searchResult: []
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
    .addCase(loadMovieDetails, (state, action) => {
      const { movieDetails } = action.payload;
      state.movieDetails = movieDetails;
    })
    .addCase(setIsMovieDetailsLoaded, (state, action) => {
      const { isMovieDetailsLoaded } = action.payload;
      state.isMovieDetailsLoaded = isMovieDetailsLoaded;
    })
    .addCase(setIsMoviesLoaded, (state, action) => {
      const { isMoviesLoaded } = action.payload;
      state.isMoviesLoaded = isMoviesLoaded;
    })
    .addCase(setIsNowPlayingMoviesLoaded, (state, action) => {
      const { isNowPlayingMoviesLoaded } = action.payload;
      state.isNowPlayingMoviesLoaded = isNowPlayingMoviesLoaded;
    })
    .addCase(loadSearchResult, (state, action) => {
      const { searchResult } = action.payload;
      state.searchResult = searchResult;
    })
    .addCase(setMoviesFilter, (state, action) => {
      const { moviesFilter } = action.payload;
      state.moviesFilter = moviesFilter;
    });
});

export { moviesData };
