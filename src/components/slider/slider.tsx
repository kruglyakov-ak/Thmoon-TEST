import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getNowPlayingMovies } from '../../store/movies-data/selectors';
import SliderItem from '../slider-item/slider-item';
import * as S from './slider.styled';

function Slider() {
  const nowPlayingMovies = useSelector(getNowPlayingMovies);
  const slider = useRef<HTMLDivElement>(null);
  const [isPrevButtonDisabled, setIPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setINextButtonDisabled] = useState(false);

  const handlePrevButtonClick = () => {
    if (slider.current !== null) {
      slider.current.scrollTo({
        left: slider.current.scrollLeft - 155,
        behavior: 'smooth',
      });
    }
  };

  const handleNextButtonClick = () => {
    if (slider.current !== null) {
      slider.current.scrollTo({
        left: slider.current.scrollLeft + 155,
        behavior: 'smooth',
      });
    }
  };

  const handleSliderScroll = () => {
    if (slider.current !== null) {
      // eslint-disable-next-line no-console
      console.log(slider.current.scrollLeft);
      if (slider.current.scrollLeft === 0) {
        setIPrevButtonDisabled(true);
      } else {
        setIPrevButtonDisabled(false);
      }
      if (slider.current.scrollLeft === slider.current.scrollWidth - slider.current.clientWidth) {
        setINextButtonDisabled(true);
      } else {
        setINextButtonDisabled(false);
      }
    }
  };

  return (
    <>
      <h2>Сейчас в кино</h2>
      <S.Slider>
        <S.ButtonPrev type='button' onClick={handlePrevButtonClick} disabled={isPrevButtonDisabled} />
        <S.SliderInner ref={slider} onScroll={handleSliderScroll}>
          {nowPlayingMovies.map((item) => <SliderItem key={item.id} movie={item}></SliderItem>)}
        </S.SliderInner>
        <S.ButtonNext type='button' onClick={handleNextButtonClick} disabled={isNextButtonDisabled} />
      </S.Slider>
    </>
  );
}

export default Slider;
