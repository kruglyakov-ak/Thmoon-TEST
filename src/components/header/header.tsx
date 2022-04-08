import * as S from './header.styled';
import { Link } from 'react-router-dom';
import { AppRoutes, NavItems } from '../../const';
import { useState } from 'react';

function Header() {
  const [activeNavItem, setActiveNavItem] = useState(NavItems.Popular);

  const handleNavItemClick = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    setActiveNavItem(currentTarget.textContent as NavItems);
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
