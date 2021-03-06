import * as S from './modal-search-result.styled';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import dayjs from 'dayjs';
import { Movie } from '../../types/movie';

type ModalSearchResultProps = {
  movies: Movie[];
  isModalShow: boolean;
}

function ModalSearchResult({ movies, isModalShow }: ModalSearchResultProps) {
  if (movies.length === 0) {
    return (
      <S.ModalSearchResult isModalShow={isModalShow}>
        <S.ModalSearchResultItem>
          <p>Ничего не найдено</p>
        </S.ModalSearchResultItem>
      </S.ModalSearchResult>
    );
  }
  return (
    <S.ModalSearchResult isModalShow={isModalShow}>
      {movies.map((item) => {
        const releaseDate = Date.parse(item.release_date);

        return (
          <Link to={`${AppRoutes.Movie}${item.id}`} key={item.id}>
            <S.ModalSearchResultItem>
              <S.ModalSearchResultItemPoster src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title} width={32} height={48} />
              <S.ModalSearchResultItemDesc>
                <S.ModalSearchResultItemTitle>{item.title}</S.ModalSearchResultItemTitle>
                <p>
                  <S.ModalSearchResultItemVote>{item.vote_average} </S.ModalSearchResultItemVote>
                  <span>{item.original_title} </span>
                  <span>{!isNaN(releaseDate) ? dayjs(releaseDate).year() : '-'}</span>
                </p>
              </S.ModalSearchResultItemDesc>
            </S.ModalSearchResultItem>
          </Link>
        );
      })}
    </S.ModalSearchResult>
  );
}

export default ModalSearchResult;
