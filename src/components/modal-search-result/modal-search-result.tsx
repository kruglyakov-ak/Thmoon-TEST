import * as S from './modal-search-result.styled';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import dayjs from 'dayjs';
import { Movie } from '../../types/movie';
import FocusLock from 'react-focus-lock';

type ModalSearchResultProps = {
  movies: Movie[];
  isModalShow: boolean;
}

function ModalSearchResult({ movies, isModalShow }: ModalSearchResultProps) {

  return (
    <FocusLock>
      <S.ModalSearchResult isModalShow={isModalShow && movies.length !== 0}>
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
    </FocusLock>
  );
}

export default ModalSearchResult;
