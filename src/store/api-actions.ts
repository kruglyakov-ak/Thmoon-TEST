import { API_KEY, NavItems } from '../const';
import { ThunkActionResult } from '../types/action';
import { changeMoviesFilterToApi } from '../utils/common';
import { loadMovies } from './action';

const fetchMoviesAction = (moviesFilter: NavItems): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get(`${changeMoviesFilterToApi(moviesFilter)}?api_key=${API_KEY}&language=ru&page=2`);
    dispatch(loadMovies(data));
  };

export {
  fetchMoviesAction
};
