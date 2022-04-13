import { createAction } from '@reduxjs/toolkit';
import { NavItems } from '../const';
import { ActionType } from '../types/action';
import { Genre } from '../types/genre';
import { Movie } from '../types/movie';
import { MovieDetails } from '../types/movie-details';

const loadMovies = createAction(ActionType.LoadMovies, (movies: Movie[]) => ({
  payload: {
    movies,
  },
}));

const loadNowPlayingMovies = createAction(
  ActionType.LoadNowPlayingMovies,
  (nowPlayingMovies: Movie[]) => ({
    payload: {
      nowPlayingMovies,
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

const loadPageCount = createAction(
  ActionType.LoadPageCount,
  (pageCount: number) => ({
    payload: {
      pageCount,
    },
  })
);

const setCurrentPage = createAction(
  ActionType.SetCurrentPage,
  (currentPage: number) => ({
    payload: {
      currentPage,
    },
  })
);

const loadGenres = createAction(ActionType.LoadGenres, (genres: Genre[]) => ({
  payload: {
    genres,
  },
}));

const loadMovieDetails = createAction(
  ActionType.LoadMovieDetails,
  (movieDetails: MovieDetails | null) => ({
    payload: {
      movieDetails,
    },
  })
);

const setIsMovieDetailsLoaded = createAction(
  ActionType.SetIsMovieDetailsLoaded,
  (isMovieDetailsLoaded: boolean) => ({
    payload: {
      isMovieDetailsLoaded,
    },
  })
);
const setIsMoviesLoaded = createAction(
  ActionType.SetIsMoviesLoaded,
  (isMoviesLoaded: boolean) => ({
    payload: {
      isMoviesLoaded,
    },
  })
);
const setIsNowPlayingMoviesLoaded = createAction(
  ActionType.SetIsNowPlayingMoviesLoaded,
  (isNowPlayingMoviesLoaded: boolean) => ({
    payload: {
      isNowPlayingMoviesLoaded,
    },
  })
);
const loadSearchResult = createAction(
  ActionType.LoadSearchResult,
  (searchResult: Movie[]) => ({
    payload: {
      searchResult,
    },
  })
);

export {
  setMoviesFilter,
  loadMovies,
  loadPageCount,
  setCurrentPage,
  loadGenres,
  loadNowPlayingMovies,
  loadMovieDetails,
  setIsMovieDetailsLoaded,
  setIsMoviesLoaded,
  setIsNowPlayingMoviesLoaded,
  loadSearchResult
};
