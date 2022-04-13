import { NavItems } from '../const';
import { RootState } from '../store/root-reducer';
import { Genre } from './genre';
import { Movie } from './movie';
import { MovieDetails } from './movie-details';

type State = RootState;

type MoviesData = {
  movies: Movie[],
  nowPlayingMovies: Movie[],
  genres: Genre[],
  moviesFilter: NavItems;
  movieDetails: null | MovieDetails;
};

type Pagination = {
  pageCount: number,
  currentPage: number;
};

export type { State, MoviesData, Pagination };
