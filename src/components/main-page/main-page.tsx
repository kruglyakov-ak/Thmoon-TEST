import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenresAction, fetchMoviesAction, fetchNowPlayingMoviesAction } from '../../store/api-actions';
import { getIsMoviesLoaded, getIsNowPlayingMoviesLoaded, getMovies, getMoviesFilter } from '../../store/movies-data/selectors';
import { getCurrentPage } from '../../store/pagination/selectors';
import EmptyPage from '../empty-page/empty-page';
import Header from '../header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import MoviesList from '../movies-list/movies-list';
import Pagination from '../pagination/pagination';
import Slider from '../slider/slider';
import * as S from './main-page.styled';

function MainPage() {
  const dispatch = useDispatch();
  const activeNavItem = useSelector(getMoviesFilter);
  const movies = useSelector(getMovies);
  const currentPage = useSelector(getCurrentPage);
  const movieList = useRef<HTMLUListElement>(null);
  const isMoviesLoaded = useSelector(getIsMoviesLoaded);
  const isNowPlayingMoviesLoaded = useSelector(getIsNowPlayingMoviesLoaded);

  const isLoaded = isMoviesLoaded && isNowPlayingMoviesLoaded;

  useEffect(() => {
    dispatch(fetchMoviesAction(activeNavItem, currentPage));
    dispatch(fetchGenresAction());
    dispatch(fetchNowPlayingMoviesAction());
  }, [activeNavItem, currentPage, dispatch]);


  if (!isLoaded) {
    return (
      <>
        <Header />
        <S.Main>
          <LoadingScreen />
        </S.Main>
      </>
    );
  }

  if (movies.length === 0) {
    return (<EmptyPage />);
  }

  return (
    <>
      <Header />
      <S.Main>
        <Slider />
        <MoviesList movieList={movieList} />
        <Pagination movieList={movieList} />
      </S.Main>
    </>
  );
}

export default MainPage;
