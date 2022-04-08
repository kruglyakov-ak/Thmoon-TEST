import { ApiRoute, NavItems } from '../const';

export const changeMoviesFilterToApi = (filter: NavItems) => {
  switch (filter) {
    case NavItems.Popular:
      return ApiRoute.PopularMovies;
    case NavItems.TopRated:
      return ApiRoute.TopRatedMovies;
    case NavItems.Upcoming:
      return ApiRoute.UpcomingMovies;
  }
};
