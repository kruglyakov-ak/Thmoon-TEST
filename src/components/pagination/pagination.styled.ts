import styled from 'styled-components';

const Pagination = styled.div`
  padding-top: 7px;
  padding-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationItem = styled.span`
  display: inline-block;
  padding-top: 8px;
  font-weight: bold;
  width: 36px;
  height: 36px;
  text-align: center;
`;

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.color.grey};
  background: none;
  border-radius: 5px;
  width: 72px;
  height: 36px;
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus {
    background: ${({ theme }) => theme.color.grey};
    color: ${({ theme }) => theme.color.white};
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;

export { Pagination, PaginationItem, Button };
