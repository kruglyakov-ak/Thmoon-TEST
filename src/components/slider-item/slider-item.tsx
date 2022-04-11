import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { getGenres } from '../../store/movies-data/selectors';
import { Movie } from '../../types/movie';
import * as S from './slider-item.styled';

type SliderProps = {
  movie: Movie;
}

function SliderItem({ movie }: SliderProps) {
  const releaseDate = Date.parse(movie.release_date);
  const genres = useSelector(getGenres);

  return (
    <S.SliderItem>
      <S.PosterConteiner>
        <S.Poster
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={140}
          height={210}
          alt={movie.title}
        />
        <S.MovieVote>{movie.vote_average}</S.MovieVote>
      </S.PosterConteiner>
      <S.Title>{movie.title}</S.Title>
      <S.MovieReleased>{!isNaN(releaseDate) ? dayjs(releaseDate).year() : '-'} </S.MovieReleased>
      <S.GenreItem>{genres.find((item) => item.id === movie.genre_ids[0])?.name}</S.GenreItem>
    </S.SliderItem>
  );
}

export default SliderItem;
