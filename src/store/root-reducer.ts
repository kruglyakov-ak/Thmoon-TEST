import { combineReducers } from '@reduxjs/toolkit';
import { moviesData } from './movies-data/movies-data';

enum NameSpace {
  Data = 'DATA',
}

const rootReducer = combineReducers({
  [NameSpace.Data]: moviesData,
});

type RootState = ReturnType<typeof rootReducer>;

export { NameSpace, rootReducer };
export type { RootState };
