import { useSelector } from 'react-redux';
import { getMovies } from '../../store/movies-data/selectors';
import MovieItem from '../movie-item/movie-item';
import * as S from './movies-list.styled';

function MoviesList() {
  const movies = useSelector(getMovies);

  return (
    <S.MoviesList>
      {movies.map((movie, i) => <MovieItem movie={movie} key={movie.id} index={i+1}/>)}
    </S.MoviesList>
  );
}

export default MoviesList;
