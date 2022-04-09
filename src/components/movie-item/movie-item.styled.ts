import styled from 'styled-components';

const MovieItem = styled.li`
  padding: 25px 20px;
  list-style-position: inside;
  display: flex;
`;

const PosterConteiner = styled.div`
  position: relative;
`;

const Poster = styled.img`
  width: 150px;
`;

const MovieVote = styled.div`
  width: 50px;
  height: 25px;
  background: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  padding-top: 4px;
  border-radius: 5px;
  position: absolute;
  top: 15px;
  left: -15px;
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
  MovieVote,
  PosterConteiner,
};
