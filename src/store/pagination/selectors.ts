import { NavItems } from '../../const';
import { Movie } from '../../types/movie';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getMovies = (state: State): Movie[] => state[NameSpace.Data].movies;
const getMoviesFilter = (state: State): NavItems => state[NameSpace.Data].moviesFilter;

export { getMovies, getMoviesFilter };
