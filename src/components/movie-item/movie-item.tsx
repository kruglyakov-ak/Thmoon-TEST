import { Movie } from '../../types/movie';
import * as S from './movie-item.styled';

type MoviesItemProps = {
  movie: Movie;
}

function MoviesItem({ movie }: MoviesItemProps) {

  return (
    <S.MovieItem>
      <S.MoviePoster src={`https://image.tmdb.org/t/p/w100${movie.poster_path}`} />
      <S.MovieTitle>{movie.title}</S.MovieTitle>
    </S.MovieItem>
  );
}

export default MoviesItem;
