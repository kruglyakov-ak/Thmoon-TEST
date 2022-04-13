import { Action } from 'redux';
import { AxiosInstance } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { State } from './state';

enum ActionType {
  LoadMovies = 'data/loadMovies',
  SetMoviesFilter = 'data/setMoviesFilter',
  LoadGenres = 'data/loadGenres',
  LoadNowPlayingMovies = 'data/loadNowPlayingMovies',
  LoadMovieDetails = 'data/loadMovieDetails',
  LoadPageCount = 'pagination/loadPageCount',
  SetCurrentPage = 'pagination/setCurrentPage',
}

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export {
  ActionType
};

export type {
  ThunkActionResult
};
