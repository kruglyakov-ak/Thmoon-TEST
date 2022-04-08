import { NavItems } from '../../const';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getMoviesFilter = (state: State): NavItems => state[NameSpace.Data].moviesFilter;

export { getMoviesFilter };
