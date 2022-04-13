import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AppRoutes, Countries } from '../../const';
import { fetchMovieDetailsAction } from '../../store/api-actions';
import { getIsMovieDetailsLoaded, getMovieDetails } from '../../store/movies-data/selectors';
import EmptyPage from '../empty-page/empty-page';
import Header from '../header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import * as S from './details-page.styled';

function DetailsPage() {
  const dispatch = useDispatch();
  const id = useLocation().pathname;
  const details = useSelector(getMovieDetails);
  const isLoaded = useSelector(getIsMovieDetailsLoaded);

  useEffect(() => {
    dispatch(fetchMovieDetailsAction(+id.substring(AppRoutes.Movie.length, id.length)));
  }, [dispatch, id]);

  if (!isLoaded) {
    return (
      <>
        <Header />
        <S.DetailsPage>
          <LoadingScreen />
        </S.DetailsPage>
      </>
    );
  }

  if (details === null) {
    return (<EmptyPage />);
  }

  return (
    <>
      <Header />
      {details !== null &&
        <S.DetailsPage>
          <S.Poster
            src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
            width={300}
            height={430}
            alt={details.title}
          />
          <S.Content>
            <h1>
              {`${details.title} ${!isNaN(Date.parse(details.release_date)) ? `(${dayjs(Date.parse(details.release_date)).year()})` : ''}`}
            </h1>
            <S.SubTitle>{details.original_title}</S.SubTitle>
            <h2>О фильме</h2>

            <S.Table>
              <tr>
                <S.TH>Год производства</S.TH>
                <td>{!isNaN(Date.parse(details.release_date)) ? dayjs(Date.parse(details.release_date)).year() : '-'}</td>
              </tr>
              <tr>
                <S.TH>Страна</S.TH>
                <td>{details.production_countries.map((items) => Countries.get(items.iso_3166_1)).join(', ')}</td>
              </tr>
              <tr>
                <S.TH>Жанр</S.TH>
                <td>{details.genres.map((items) => items.name).join(', ')}</td>
              </tr>
              <tr>
                <S.TH>Слоган</S.TH>
                <td>{details.tagline.length !== 0 ? `«${details.tagline}»` : '-'}</td>
              </tr>
              <tr>
                <S.TH>Бюджет фильма</S.TH>
                <td>{details.budget !== 0 ? `$ ${details.budget}` : '-'}</td>
              </tr>
              <tr>
                <S.TH>Сборы в мире</S.TH>
                <td>{details.budget !== 0 ? `$ ${details.revenue}` : '-'}</td>
              </tr>
              <tr>
                <S.TH>Премьера в мире</S.TH>
                <td>{!isNaN(Date.parse(details.release_date)) ? dayjs(Date.parse(details.release_date)).format('DD.MM.YYYY') : '-'}</td>
              </tr>
              <tr>
                <S.TH>Время</S.TH>
                <td>{`${details.runtime} мин.`}</td>
              </tr>
              <tr>
                <S.VoteAverage>{details.vote_average}</S.VoteAverage>
              </tr>
            </S.Table>
            <p>{details.overview}</p>
          </S.Content>
        </S.DetailsPage>}
    </>
  );
}

export default DetailsPage;

