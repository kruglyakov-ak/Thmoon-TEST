import * as S from './header.styled';
import { Link } from 'react-router-dom';
import { AppRoutes, NavItems } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setMoviesFilter } from '../../store/action';
import { getMovies, getMoviesFilter } from '../../store/movies-data/selectors';
import { useCallback, useEffect, useState } from 'react';
import ModalSearchResult from '../modal-search-result/modal-search-result';

function Header() {
  const dispatch = useDispatch();
  const [isModalShow, setIsModalShow] = useState(false);
  const activeNavItem = useSelector(getMoviesFilter);
  const movies = useSelector(getMovies);

  const handleEscapeKeyDown = useCallback((evt: { key: string; }) => {
    if (evt.key === 'Escape') {
      setIsModalShow(false);
      document.body.removeEventListener('keydown', handleEscapeKeyDown);
    }
  }, []);

  const handleNavItemClick = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    dispatch(setMoviesFilter(currentTarget.textContent as NavItems));
    dispatch(setCurrentPage(1));
  };

  const handleSearchInputFocus = () => {
    setIsModalShow(true);
  };

  const handleModalClose = () => {
    setIsModalShow(false);
  };

  useEffect(() => {
    isModalShow ?
      document.body.addEventListener('keydown', handleEscapeKeyDown) :
      document.body.removeEventListener('keydown', handleEscapeKeyDown);
  }, [handleEscapeKeyDown, isModalShow]);

  return (
    <S.Header>
      <S.Content>
        <Link to={AppRoutes.Main}>
          <S.Logo>ЛОГОТИП</S.Logo>
        </Link>
        <S.Navigation>
          <S.NavigationList>
            <S.NavigationItem active={activeNavItem === NavItems.Popular} onClick={handleNavItemClick}>
              <Link to={AppRoutes.Main}>
                {NavItems.Popular}
              </Link>
            </S.NavigationItem>
            <S.NavigationItem active={activeNavItem === NavItems.TopRated} onClick={handleNavItemClick}>
              <Link to={AppRoutes.Main}>
                {NavItems.TopRated}
              </Link>
            </S.NavigationItem>
            <S.NavigationItem active={activeNavItem === NavItems.Upcoming} onClick={handleNavItemClick}>
              <Link to={AppRoutes.Main}>
                {NavItems.Upcoming}
              </Link>
            </S.NavigationItem>
          </S.NavigationList>
        </S.Navigation>
        <S.SearchConteiner>
          <S.SearchInput type="text" placeholder='Поиск' onFocus={handleSearchInputFocus} />

          <ModalSearchResult movies={movies} isModalShow={isModalShow} />
        </S.SearchConteiner>
      </S.Content>
      <S.ModalOverlay isModalShow={isModalShow && movies.length !== 0} onClick={handleModalClose} />
    </S.Header>
  );
}

export default Header;
