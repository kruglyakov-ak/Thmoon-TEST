import * as S from './header.styled';
import { Link } from 'react-router-dom';
import { AppRoutes, NavItems } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearchResult, setCurrentPage, setMoviesFilter } from '../../store/action';
import { getSearchResalt, getMoviesFilter } from '../../store/movies-data/selectors';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import ModalSearchResult from '../modal-search-result/modal-search-result';
import { fetchSearchMovieAction } from '../../store/api-actions';

function Header() {
  const dispatch = useDispatch();
  const [isModalShow, setIsModalShow] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const activeNavItem = useSelector(getMoviesFilter);
  const searchResalt = useSelector(getSearchResalt);

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

  const handleSearchInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(target.value);
  };

  useEffect(() => {
    isModalShow ?
      document.body.addEventListener('keydown', handleEscapeKeyDown) :
      document.body.removeEventListener('keydown', handleEscapeKeyDown);
  }, [handleEscapeKeyDown, isModalShow]);

  useEffect(() => {
    if (searchInputValue === '') {
      dispatch(loadSearchResult([]));
    }
    dispatch(fetchSearchMovieAction(searchInputValue));
  }, [dispatch, searchInputValue]);

  return (
    <S.Header>
      <S.Content>
        <Link to={AppRoutes.Main}>
          <S.Logo>ЛОГОТИП</S.Logo>
        </Link>
        <S.Navigation>
          <S.NavigationList>
            <S.NavigationItem active={activeNavItem === NavItems.Popular} onClick={handleNavItemClick}>
              {NavItems.Popular}
            </S.NavigationItem>
            <S.NavigationItem active={activeNavItem === NavItems.TopRated} onClick={handleNavItemClick}>
              {NavItems.TopRated}
            </S.NavigationItem>
            <S.NavigationItem active={activeNavItem === NavItems.Upcoming} onClick={handleNavItemClick}>
              {NavItems.Upcoming}
            </S.NavigationItem>
          </S.NavigationList>
        </S.Navigation>
        <S.SearchConteiner>
          <S.SearchInput
            type="text"
            placeholder='Поиск'
            onClick={handleSearchInputFocus}
            value={searchInputValue}
            onChange={handleSearchInputChange}
          />

          <ModalSearchResult movies={searchResalt} isModalShow={isModalShow} />
        </S.SearchConteiner>
      </S.Content>
      <S.ModalOverlay isModalShow={isModalShow} onClick={handleModalClose} />
    </S.Header>
  );
}

export default Header;
