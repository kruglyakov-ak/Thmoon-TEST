import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getPageCount = (state: State): number => state[NameSpace.Pagination].pageCount;
const getCurrentPage = (state: State): number => state[NameSpace.Pagination].currentPage;

export { getPageCount, getCurrentPage };
