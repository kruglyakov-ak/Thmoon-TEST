import { API_KEY, NavItems } from '../const';
import { ThunkActionResult } from '../types/action';
import { changeMoviesFilterToApi } from '../utils/common';
import { loadMovies, loadPageCount, loadGenres } from './action';

const fetchMoviesAction = (moviesFilter: NavItems, currentPage: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get(`movie${changeMoviesFilterToApi(moviesFilter)}?api_key=${API_KEY}&language=ru&page=${currentPage}`);
    dispatch(loadMovies(data.results));
    dispatch(loadPageCount(data.total_pages));
  };

const fetchGenresAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get(`genre/movie/list?api_key=${API_KEY}&language=ru`);
    dispatch(loadGenres(data.genres));
  };

export {
  fetchMoviesAction,
  fetchGenresAction
};
