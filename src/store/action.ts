import { createAction } from '@reduxjs/toolkit';
import { NavItems } from '../const';
import { ActionType } from '../types/action';

const setMoviesFilter = createAction(
  ActionType.SetMoviesFilter,
  (moviesFilter: NavItems) => ({
    payload: {
      moviesFilter,
    },
  })
);

export { setMoviesFilter };
