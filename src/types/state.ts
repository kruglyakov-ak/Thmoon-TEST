import { NavItems } from '../const';
import { RootState } from '../store/root-reducer';
import { Genre } from './genre';
import { Movie } from './movie';

type State = RootState;

type MoviesData = {
  movies: Movie[],
  genres: Genre[],
  moviesFilter: NavItems;
};

type Pagination = {
  pageCount: number,
  currentPage: number;
};

export type { State, MoviesData, Pagination };
