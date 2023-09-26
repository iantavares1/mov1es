import axios from 'axios'
import { MovieList } from '@/types'

const apiReadToken = import.meta.env.VITE_API_READ_TOKEN

const callAPI = async (url: string, additionalParams?: object) => {
  const options = {
    method: 'GET',
    params: {
      include_adult: 'false',
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

export const getImage = (imgPath: string) =>
  `https://image.tmdb.org/t/p/original/${imgPath}`

export const getMovies = async (list: MovieList = 'popular', page?: number) =>
  callAPI(`https://api.themoviedb.org/3/movie/${list}`, { page })

export const getMovieDetails = async (movieId: number) =>
  callAPI(`https://api.themoviedb.org/3/movie/${movieId}`)

export const getMovieCredits = async (movieId: number) =>
  callAPI(`https://api.themoviedb.org/3/movie/${movieId}/credits`)
