import { API_KEY, NavItems } from '../const';
import { ThunkActionResult } from '../types/action';
import { changeMoviesFilterToApi } from '../utils/common';
import {
  loadMovies,
  loadPageCount,
  loadGenres,
  loadNowPlayingMovies,
  loadMovieDetails,
  setIsMovieDetailsLoaded,
  setIsNowPlayingMoviesLoaded,
  setIsMoviesLoaded,
} from './action';

const fetchMoviesAction = (moviesFilter: NavItems, currentPage: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setIsMoviesLoaded(false));
    const { data } = await api.get(`movie${changeMoviesFilterToApi(moviesFilter)}?api_key=${API_KEY}&language=ru&page=${currentPage}`);
    dispatch(loadMovies(data.results));
    dispatch(loadPageCount(data.total_pages));
    dispatch(setIsMoviesLoaded(true));
  };

const fetchGenresAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get(`genre/movie/list?api_key=${API_KEY}&language=ru`);
    dispatch(loadGenres(data.genres));
  };

const fetchNowPlayingMoviesAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setIsNowPlayingMoviesLoaded(false));
    const { data } = await api.get(`/movie/now_playing?api_key=${API_KEY}&language=ru&page=1`);
    dispatch(loadNowPlayingMovies(data.results));
    dispatch(setIsNowPlayingMoviesLoaded(true));
  };

const fetchMovieDetailsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setIsMovieDetailsLoaded(false));
    const { data } = await api.get(`/movie/${id}?api_key=${API_KEY}&language=ru`);
    dispatch(loadMovieDetails(data));
    dispatch(setIsMovieDetailsLoaded(true));
  };

export {
  fetchMoviesAction,
  fetchGenresAction,
  fetchNowPlayingMoviesAction,
  fetchMovieDetailsAction,
};
