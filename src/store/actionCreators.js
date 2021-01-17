import { GET_MOVIE_KEYWORDS, GET_SIMILAR_MOVIES, GET_TOPRATED_MOVIES } from './actionTypes';

export const getSimilarMovies = (value) => ({
  type: GET_SIMILAR_MOVIES,
  similarMovies : value
})

export const getMovieKeywords = (value) => ({
  type: GET_MOVIE_KEYWORDS,
  keywords : value
})

export const getTopratedMovies = (value) => ({
  type: GET_TOPRATED_MOVIES,
  topratedMovies : value
})