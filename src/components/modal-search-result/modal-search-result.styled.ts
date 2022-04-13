import styled, { css } from 'styled-components';

type ModalSearchResultProps = {
  isModalShow: boolean;
};

const SearchModal = css`
  position: absolute;
  width: 340px;
  max-height: 408px;
  overflow-y: scroll;
  scrollbar-color: ${({ theme }) => theme.color.grey} ${({ theme }) => theme.color.backgroundGrey};
  scrollbar-width: thin;
  top: 33px;
  left: 0;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 10px 20px -2px rgba(0, 0, 0, 0.4);
  z-index: 3;
`;

const ModalSearchResult = styled.div<ModalSearchResultProps>`
  ${({ isModalShow }) => (isModalShow ? SearchModal : 'display: none;')}
`;

const ModalSearchResultItem = styled.div`
  display: flex;
  padding: 10px 0;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGrey};
  }
`;

const ModalSearchResultItemDesc = styled.div`
  padding-left: 10px;
`;

const ModalSearchResultItemPoster = styled.img`
  width: 32px;
  height: 48px;
  margin-left: 10px;
`;

const ModalSearchResultItemTitle = styled.h3`
  color: ${({ theme }) => theme.color.grey};
`;

const ModalSearchResultItemVote = styled.span`
  color: ${({ theme }) => theme.color.green};
  font-weight: bold;
`;

export {
  ModalSearchResult,
  ModalSearchResultItem,
  ModalSearchResultItemPoster,
  ModalSearchResultItemDesc,
  ModalSearchResultItemTitle,
  ModalSearchResultItemVote,
};
