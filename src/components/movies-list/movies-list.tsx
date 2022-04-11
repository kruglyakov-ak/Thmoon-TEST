import { useSelector } from 'react-redux';
import { getGenres, getMovies } from '../../store/movies-data/selectors';
import { getCurrentPage } from '../../store/pagination/selectors';
import MovieItem from '../movie-item/movie-item';
import * as S from './movies-list.styled';

function MoviesList() {
  const movies = useSelector(getMovies);
  const currentPage = useSelector(getCurrentPage);
  const genres = useSelector(getGenres);
  // eslint-disable-next-line no-console
  console.log(genres);

  return (
    <S.MoviesList>
      {movies.map((movie, i) => <MovieItem genres={genres} movie={movie} key={movie.id} index={(i+1)+((currentPage-1)*20)}/>)}
    </S.MoviesList>
  );
}

export default MoviesList;
