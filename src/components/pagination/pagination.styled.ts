import styled from 'styled-components';

const Pagination = styled.div`
  padding-top: 7px;
  padding-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationInput = styled.input`
  font-weight: bold;
  width: 72px;
  height: 36px;
  text-align: center;

  border: none;
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

export { Pagination, PaginationInput, Button };
