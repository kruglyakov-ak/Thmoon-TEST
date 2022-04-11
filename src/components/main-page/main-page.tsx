import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenresAction, fetchMoviesAction, fetchNowPlayingMoviesAction } from '../../store/api-actions';
import { getMoviesFilter } from '../../store/movies-data/selectors';
import { getCurrentPage } from '../../store/pagination/selectors';
import Header from '../header/header';
import MoviesList from '../movies-list/movies-list';
import Pagination from '../pagination/pagination';
import Slider from '../slider/slider';
import * as S from './main-page.styled';

function MainPage() {
  const dispatch = useDispatch();
  const activeNavItem = useSelector(getMoviesFilter);
  const currentPage = useSelector(getCurrentPage);
  const movieList = useRef<HTMLUListElement>(null);

  useEffect(() => {
    dispatch(fetchMoviesAction(activeNavItem, currentPage));
    dispatch(fetchGenresAction());
    dispatch(fetchNowPlayingMoviesAction());
  }, [activeNavItem, currentPage, dispatch]);

  return (
    <>
      <Header />
      <S.Main>
        <Slider />
        <MoviesList movieList={movieList}/>
        <Pagination movieList={movieList}/>
      </S.Main>
    </>
  );
}

export default MainPage;
