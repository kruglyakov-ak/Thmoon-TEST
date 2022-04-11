import styled from 'styled-components';

const SliderItem = styled.div`
  font-size: 13px;
  line-height: 20px;
  &:not(:last-child) {
    padding-right: 15px;
  }
`;

const PosterConteiner = styled.div`
  position: relative;
  width: 140px;
  height: 210px;
`;

const Poster = styled.img`
  border-radius: 5px;
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
  left: 0px;
  padding-top: 5px;
`;

const Title = styled.h3``;

const MovieReleased = styled.span``;

const GenreItem = styled.span``;

export {
  SliderItem,
  PosterConteiner,
  Poster,
  MovieVote,
  Title,
  MovieReleased,
  GenreItem,
};
