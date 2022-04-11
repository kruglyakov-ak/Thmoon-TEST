import styled from 'styled-components';

const MoviesList = styled.ul`
  margin-top: 20px;
  height: calc(100vh - 472px);
  overflow-y: scroll;

  scrollbar-color: ${({ theme }) => theme.color.grey} ${({ theme }) => theme.color.backgroundGrey};
    scrollbar-width: thin;
`;

export { MoviesList };
