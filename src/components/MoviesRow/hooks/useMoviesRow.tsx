import { useEffect, useState } from 'react'
import { Movie } from '../../../types/Movie'
import { MovieList } from '../../../types/MovieList'
import { getMovies } from '../../../services/api'

export const useMoviesRow = (list: MovieList) => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getMovies(list)
      setMovies(response.results)
    }

    fetchMovies()
  }, [])

  return { movies }
}
