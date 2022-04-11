import { ChangeEvent, RefObject, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/action';
import { getCurrentPage, getPageCount } from '../../store/pagination/selectors';
import * as S from './pagination.styled';

type PaginationProps = {
  movieList: RefObject<HTMLUListElement>;
}


function Pagination({ movieList }: PaginationProps) {
  const dispatch = useDispatch();
  const pageCount = useSelector(getPageCount);
  const currentPage = useSelector(getCurrentPage);
  const [paginationInputValue, setPaginationInputValue] = useState(currentPage);

  const handlePrevButtonClick = () => {
    if (currentPage !== 1) {
      dispatch(setCurrentPage(currentPage - 1));
      setPaginationInputValue(currentPage - 1);
    }
    if (movieList !== null) {
      movieList.current?.scrollTo({
        top: 0
      });
    }
  };

  const handleNextButtonClick = () => {
    if (currentPage !== pageCount) {
      dispatch(setCurrentPage(currentPage + 1));
      setPaginationInputValue(currentPage + 1);
    }
    if (movieList !== null) {
      movieList.current?.scrollTo({
        top: 0
      });
    }
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(+target.value)) {
      setPaginationInputValue(+target.value);
    }
  };

  const handleInputBlur = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (+target.value > 0 && +target.value <= pageCount) {
      dispatch(setCurrentPage(+target.value));
    }
    if (+target.value < 1) {
      dispatch(setCurrentPage(1));
      setPaginationInputValue(1);
    }
    if (+target.value > pageCount) {
      dispatch(setCurrentPage(pageCount));
      setPaginationInputValue(pageCount);
    }
    if (movieList !== null) {
      movieList.current?.scrollTo({
        top: 0
      });
    }
  };

  return (
    <S.Pagination>
      <S.Button type='button' disabled={currentPage === 1} onClick={handlePrevButtonClick}>Назад</S.Button>
      <S.PaginationInput type="text" value={paginationInputValue} onChange={handleInputChange} onBlur={handleInputBlur} />
      <S.Button type='button' disabled={pageCount === currentPage} onClick={handleNextButtonClick}>Вперед</S.Button>
    </S.Pagination>
  );
}

export default Pagination;
