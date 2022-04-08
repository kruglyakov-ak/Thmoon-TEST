import * as S from './header.styled';
import { Link } from 'react-router-dom';
import { AppRoutes, NavItems } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { setMoviesFilter } from '../../store/action';
import { getMoviesFilter } from '../../store/movies-data/selectors';

function Header() {
  const dispatch = useDispatch();
  const activeNavItem = useSelector(getMoviesFilter);

  const handleNavItemClick = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    dispatch(setMoviesFilter(currentTarget.textContent as NavItems));
  };

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
        </S.Navigation >
      </S.Content >
    </S.Header >
  );
}

export default Header;
