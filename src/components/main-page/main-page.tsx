import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAction } from '../../store/api-actions';
import { getMoviesFilter } from '../../store/movies-data/selectors';
import { getCurrentPage } from '../../store/pagination/selectors';
import Header from '../header/header';
import MoviesList from '../movies-list/movies-list';
import Pagination from '../pagination/pagination';
import * as S from './main-page.styled';

function MainPage() {
  const dispatch = useDispatch();
  const activeNavItem = useSelector(getMoviesFilter);
  const currentPage = useSelector(getCurrentPage);

  useEffect(() => {
    dispatch(fetchMoviesAction(activeNavItem, currentPage));
  }, [activeNavItem, currentPage, dispatch]);

  return (
    <>
      <Header />
      <S.Main>
        <h1>{activeNavItem}</h1>
        <MoviesList />
        <Pagination />
      </S.Main>
    </>
  );
}

export default MainPage;
