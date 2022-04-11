import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { getNowPlayingMovies } from '../../store/movies-data/selectors';
import SliderItem from '../slider-item/slider-item';
import * as S from './slider.styled';

function Slider() {
  const nowPlayingMovies = useSelector(getNowPlayingMovies);
  const slider = useRef<HTMLDivElement>(null);

  const handlePrevButtonClick = () => {
    if (slider.current !== null) {
      // eslint-disable-next-line no-console
      console.log(slider.current.scrollLeft);
      slider.current.scrollTo({
        left: slider.current.scrollLeft - 155,
        behavior: 'smooth',
      });
    }
  };

  const handleNextButtonClick = () => {
    if (slider.current !== null) {
      // eslint-disable-next-line no-console
      console.log(slider.current.scrollWidth - slider.current.clientWidth);
      slider.current.scrollTo({
        left: slider.current.scrollLeft + 155,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <h2>Сейчас в кино</h2>
      <S.Slider>
        <S.ButtonPrev type='button' onClick={handlePrevButtonClick}/>
        <S.SliderInner ref={slider}>
          {nowPlayingMovies.map((item) => <SliderItem key={item.id} movie={item}></SliderItem>)}
        </S.SliderInner>
        <S.ButtonNext type='button' onClick={handleNextButtonClick}/>
      </S.Slider>
    </>
  );
}

export default Slider;
