import styled from 'styled-components';

const MovieItem = styled.li`
  padding: 25px 20px;
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  border-top: 2px solid ${({ theme }) => theme.color.lightGrey};

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGrey};
  }
`;

const PosterConteiner = styled.div`
  position: relative;
  width: 64px;
  height: 96px;
  padding-left: 20px;
`;

const Poster = styled.img`
  border-radius: 5px;
  font-size: 11px;
`;

const MovieVote = styled.div`
  width: 31px;
  height: 19px;
  background: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-size: 11px;
  line-height: 13px;
  border-radius: 2px;
  position: absolute;
  top: 5px;
  left: 15px;
  padding-top: 5px;
`;

const ContentCenter = styled.div`
  padding-left: 40px;
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

const MoviePosition = styled.div`
  width: 70px;
  height: 100%;
  font-weight: bold;
`;

const GenreItem = styled.span`
  display: inline-block;
`;

export {
  MovieItem,
  Title,
  Poster,
  ContentCenter,
  OriginalTitle,
  MovieReleased,
  OrignalLanguage,
  MovieVote,
  PosterConteiner,
  MoviePosition,
  GenreItem,
};
