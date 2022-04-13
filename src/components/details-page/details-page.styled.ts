import styled from 'styled-components';

const DetailsPage = styled.main`
  width: 1300px;
  min-height: 350px;
  padding: 70px 10px 20px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
`;

const Poster = styled.img`
  padding-left: 50px;
`;

const Content = styled.div`
  padding-left: 50px;

  & h2 {
    padding-top: 30px;
  }
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.color.darkGrey};
  padding-top: 10px;
`;

const Table = styled.table`
  padding-top: 10px;
  padding-bottom: 20px;
`;

const TH = styled.td`
  min-width: 200px;
  color: ${({ theme }) => theme.color.darkGrey};
`;

const VoteAverage = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.large};
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 20px;
`;

export { DetailsPage, Poster, Content, SubTitle, Table, TH, VoteAverage };
