import { RefObject } from 'react';
import { useSelector } from 'react-redux';
import { getGenres, getMovies, getMoviesFilter } from '../../store/movies-data/selectors';
import { getCurrentPage } from '../../store/pagination/selectors';
import MovieItem from '../movie-item/movie-item';
import * as S from './movies-list.styled';

type MoviesListProps = {
  movieList: RefObject<HTMLUListElement>;
}

function MoviesList({movieList}: MoviesListProps) {
  const movies = useSelector(getMovies);
  const activeNavItem = useSelector(getMoviesFilter);
  const currentPage = useSelector(getCurrentPage);
  const genres = useSelector(getGenres);

  return (
    <>
      <h2>{activeNavItem}</h2>
      <S.MoviesList ref={movieList}>
        {movies.map((movie, i) => <MovieItem genres={genres} movie={movie} key={movie.id} index={(i + 1) + ((currentPage - 1) * 20)} />)}
      </S.MoviesList>
    </>
  );
}

export default MoviesList;
