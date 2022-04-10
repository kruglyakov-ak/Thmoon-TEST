import { combineReducers } from '@reduxjs/toolkit';
import { moviesData } from './movies-data/movies-data';
import { pagination } from './pagination/pagination';

enum NameSpace {
  Data = 'DATA',
  Pagination = 'PAGINATION',
}

const rootReducer = combineReducers({
  [NameSpace.Data]: moviesData,
  [NameSpace.Pagination]: pagination,
});

type RootState = ReturnType<typeof rootReducer>;

export { NameSpace, rootReducer };
export type { RootState };
