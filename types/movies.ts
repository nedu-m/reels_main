export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export type topRatedProps = {
  topRatedMovies: {
    overview: string;
    vote_average: number;
    release_date: string;
    id: number;
    title: string;
    poster_path: string;
  }[];
};

export type trendingProps = {
  trendingMovies: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    overview: string;
  }[];
};
