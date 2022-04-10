import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/action';
import { getCurrentPage, getPageCount } from '../../store/pagination/selectors';
import * as S from './pagination.styled';

function Pagination() {
  const dispatch = useDispatch();
  const pageCount = useSelector(getPageCount);
  const currentPage = useSelector(getCurrentPage);

  const handlePrevButtonClick = () => {
    if (currentPage !== 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextButtonClick = () => {
    if (currentPage !== pageCount) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <S.Pagination>
      <S.Button type='button' disabled={currentPage === 1} onClick={handlePrevButtonClick}>Назад</S.Button>
      <S.PaginationItem>{currentPage}</S.PaginationItem>
      <S.Button type='button' disabled={pageCount === currentPage} onClick={handleNextButtonClick}>Вперед</S.Button>
    </S.Pagination>
  );
}

export default Pagination;
