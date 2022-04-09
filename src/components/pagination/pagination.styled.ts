import styled from 'styled-components';

const Pagination = styled.div`
  padding-top: 7px;
  padding-bottom: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.lightGrey};
`;

export { Pagination, PaginationItem };
