import dayjs from 'dayjs';
import { Movie } from '../../types/movie';
import * as S from './movie-item.styled';

type MoviesItemProps = {
  movie: Movie;
  index: number;
}

function MoviesItem({ movie, index }: MoviesItemProps) {
  const releaseYear = Date.parse(movie.release_date);

  return (
    <S.MovieItem>
      <S.MoviePosition>{index}</S.MoviePosition>
      <S.PosterConteiner>
        <S.Poster
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={64}
          height={96}
          alt={movie.title}
        />
        <S.MovieVote>{movie.vote_average}</S.MovieVote>
      </S.PosterConteiner>
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
