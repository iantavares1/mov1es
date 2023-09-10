import axios from 'axios'
import { MovieList } from '../types/MovieList'

const apiReadToken = import.meta.env.VITE_API_READ_TOKEN

const callAPI = async (url: string, additionalParams?: object) => {
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

export const getImage = (posterPath: string) =>
  `https://image.tmdb.org/t/p/w500/${posterPath}`

export const getMovies = async (list: MovieList = 'popular', page?: number) =>
  callAPI(`https://api.themoviedb.org/3/movie/${list}`, { page })

export const searchMovie = async (movieId: number) =>
  callAPI(`https://api.themoviedb.org/3/movie/${movieId}`)
