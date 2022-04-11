import styled from 'styled-components';

const Slider = styled.div`
  width: 1070px;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  position: relative;

`;

const SliderInner = styled.div`
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
`;

const Button = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  padding: 0;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.grey};
  top: 125px;
  cursor: pointer;
  border-radius: 50%;
`;

const ButtonPrev = styled(Button)`
  left: -60px;

  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.grey};
    transform: rotate(45deg);
    top: 8px;
    left: 20px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.grey};
    transform: rotate(135deg);
    bottom: 8px;
    left: 20px;
  }
`;
const ButtonNext = styled(Button)`
  right: -60px;

  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.grey};
    transform: rotate(-45deg);
    top: 8px;
    right: 20px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.grey};
    transform: rotate(-135deg);
    bottom: 8px;
    right: 20px;
  }
`;

export { Slider, SliderInner, ButtonPrev, ButtonNext };
