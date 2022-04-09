import dayjs from 'dayjs';
import { Movie } from '../../types/movie';
import * as S from './movie-item.styled';

type MoviesItemProps = {
  movie: Movie;
}

function MoviesItem({ movie }: MoviesItemProps) {
  const releaseYear = Date.parse(movie.release_date);

  return (
    <S.MovieItem>
      <S.Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={150} height={255} alt={movie.title} />
      <S.ContentCenter>
        <S.Title>{movie.title}</S.Title>
        <S.OriginalTitle>{movie.original_title}</S.OriginalTitle>
        <S.OrignalLanguage><img src={`/icons/flags/${movie.original_language}.png`} alt="" width={16} height={11} /></S.OrignalLanguage>
        <S.MovieReleased>Год релиза: {dayjs(releaseYear).year()}</S.MovieReleased>
      </S.ContentCenter>
    </S.MovieItem>
  );
}

export default MoviesItem;
