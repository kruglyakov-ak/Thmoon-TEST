import { createReducer } from '@reduxjs/toolkit';
import { Pagination } from '../../types/state';
import { loadPageCount, setCurrentPage } from '../action';

const initialState: Pagination = {
  pageCount: 0,
  currentPage: 1,
};

const pagination = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPageCount, (state, action) => {
      const { pageCount } = action.payload;
      state.pageCount = pageCount;
    })
    .addCase(setCurrentPage, (state, action) => {
      const { currentPage } = action.payload;
      state.currentPage = currentPage;
    });
});

export { pagination };
