import { NavItems } from '../../const';
import { Genre } from '../../types/genre';
import { Movie } from '../../types/movie';
import { MovieDetails } from '../../types/movie-details';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getMovies = (state: State): Movie[] => state[NameSpace.Data].movies;
const getNowPlayingMovies = (state: State): Movie[] => state[NameSpace.Data].nowPlayingMovies;
const getMovieDetails = (state: State): MovieDetails | null => state[NameSpace.Data].movieDetails;
const getGenres = (state: State): Genre[] => state[NameSpace.Data].genres;
const getMoviesFilter = (state: State): NavItems => state[NameSpace.Data].moviesFilter;
const getIsMoviesLoaded = (state: State): boolean => state[NameSpace.Data].isMoviesLoaded;
const getIsNowPlayingMoviesLoaded = (state: State): boolean => state[NameSpace.Data].isNowPlayingMoviesLoaded;
const getIsMovieDetailsLoaded = (state: State): boolean => state[NameSpace.Data].isMovieDetailsLoaded;

export {
  getMovies,
  getMoviesFilter,
  getGenres,
  getNowPlayingMovies,
  getMovieDetails,
  getIsMovieDetailsLoaded,
  getIsMoviesLoaded,
  getIsNowPlayingMoviesLoaded,
};
