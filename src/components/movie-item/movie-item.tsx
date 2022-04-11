import dayjs from 'dayjs';
import { Genre } from '../../types/genre';
import { Movie } from '../../types/movie';
import * as S from './movie-item.styled';

type MoviesItemProps = {
  movie: Movie;
  index: number;
  genres: Genre[];
}

function MoviesItem({ movie, index, genres }: MoviesItemProps) {
  const releaseDate = Date.parse(movie.release_date);

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
        <S.MovieReleased>Год релиза: {dayjs(releaseDate).year()}</S.MovieReleased>
        {movie.genre_ids.map((item, i, arr) => {
          if (i + 1 === arr.length) {
            return <S.GenreItem key={item}>{genres.find((item2) => item2.id === item)?.name}</S.GenreItem>;
          }
          return <S.GenreItem key={item}>{`${genres.find((item2) => item2.id === item)?.name}/`}</S.GenreItem>;
        })}
      </S.ContentCenter>
    </S.MovieItem>
  );
}

export default MoviesItem;
