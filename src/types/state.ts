import { NavItems } from '../const';
import { RootState } from '../store/root-reducer';

type State = RootState;

type MoviesData = {
  moviesFilter: NavItems;
};

export type { State, MoviesData };
