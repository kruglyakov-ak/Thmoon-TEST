import { createReducer } from '@reduxjs/toolkit';
import { NavItems } from '../../const';
import { MoviesData } from '../../types/state';
import { setMoviesFilter } from '../action';

const initialState: MoviesData = {
  moviesFilter: NavItems.Popular,
};

const moviesData = createReducer(initialState, (builder) => {
  builder
    .addCase(setMoviesFilter, (state, action) => {
      const { moviesFilter } = action.payload;
      state.moviesFilter = moviesFilter;
    });
});

export { moviesData };
