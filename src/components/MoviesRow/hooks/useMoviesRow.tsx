import { useEffect, useState } from 'react'
import { Movie, MovieList } from '@/types'
import { getMovies } from '@/services/api'

export const useMoviesRow = (list: MovieList | Movie[]) => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    if (typeof list !== 'string') {
      setMovies(list)
      return
    }

    const fetchMovies = async () => {
      const response = await getMovies(list)
      setMovies(response.results)
    }

    fetchMovies()
  }, [list])

  return { movies }
}
