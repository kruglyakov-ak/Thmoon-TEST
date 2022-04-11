import { createAction } from '@reduxjs/toolkit';
import { NavItems } from '../const';
import { ActionType } from '../types/action';
import { Genre } from '../types/genre';
import { Movie } from '../types/movie';

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

export {
  setMoviesFilter,
  loadMovies,
  loadPageCount,
  setCurrentPage,
  loadGenres,
  loadNowPlayingMovies,
};
