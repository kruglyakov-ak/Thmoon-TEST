import styled from 'styled-components';

const MovieItem = styled.li`
  padding: 25px 20px;
  list-style-position: inside;
  display: flex;

  &::marker {
    font-weight: bold;
    font-size: ${({ theme }) => theme.font.large};
  }
`;

const Poster = styled.img`
  width: 150px;
`;

const ContentCenter = styled.div`
  padding-left: 20px;
`;

const Title = styled.h3``;

const OriginalTitle = styled.span`
  display: inline-block;
`;
const OrignalLanguage = styled.span`
  display: inline-block;
  padding-left: 10px;
`;
const MovieReleased = styled.span`
  display: block;
`;

export {
  MovieItem,
  Title,
  Poster,
  ContentCenter,
  OriginalTitle,
  MovieReleased,
  OrignalLanguage,
};
