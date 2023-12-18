export const POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular`

export const NOW_PLAYING_MOVIES = `https://api.themoviedb.org/3/movie/now_playing`

export const TOP_RATED_MOVIES = `https://api.themoviedb.org/3/movie/top_rated`

export const MOVIE_DETAILS = (movieId: number) =>
  `https://api.themoviedb.org/3/movie/${movieId}`

export const MOVIE_CREDITS = (movieId: number) =>
  `https://api.themoviedb.org/3/movie/${movieId}/credits`

export const TMDB_IMAGE = (imagePath: string) =>
  `https://image.tmdb.org/t/p/w500${imagePath}`
