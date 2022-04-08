import styled from 'styled-components';

const Main = styled.main`
  width: 1300px;
  min-height: 350px;
  padding: 80px 10px 0;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.white};
`;

export { Main };
