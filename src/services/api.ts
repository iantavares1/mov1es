import axios from 'axios'

const apiReadToken = import.meta.env.VITE_API_READ_TOKEN

export const getImage = (posterPath: string) =>
  `https://image.tmdb.org/t/p/w500/${posterPath}`

export const searchMovie = async (movieId: number) =>
  callAPI(`https://api.themoviedb.org/3/movie/${movieId}`)

export const getPopularMovies = async (page?: number) =>
  callAPI('https://api.themoviedb.org/3/movie/upcoming', { page })

export const callAPI = async (url: string, additionalParams?: object) => {
  const options = {
    method: 'GET',
    params: {
      language: 'pt-BR',
      ...additionalParams,
    },
    url,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiReadToken}`,
    },
  }

  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    return error
  }
}
