import styled, { css } from 'styled-components';

const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.color.grey};
  position: fixed;
  color: ${({ theme }) => theme.color.darkGrey};
  z-index: 2;
`;

const Content = styled.div`
  max-width: 1300px;
  min-height: 70px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Logo = styled.h2`
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.white};
  }
`;

const Navigation = styled.nav`
  max-width: 800px;
  padding-left: 50px;
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;`;

type NavigationItemProps = {
  active?: boolean;
};

const activeLi = css`
  text-decoration: underline;
  color: ${({ theme }) => theme.color.white};
`;

const NavigationItem = styled.li<NavigationItemProps>`
  text-transform: uppercase;
  padding-left: 100px;

  ${({ active }) => (active ? activeLi : '')};

  & a:hover,
  & a:focus {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.white};
  }
`;
export { Header, Content, Logo, Navigation, NavigationList, NavigationItem };
