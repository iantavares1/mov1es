import { useEffect, useState } from 'react'
import { getImage, getMovies } from '@/services/api'
import { MovieWithPosterUrl } from '@/types/MovieWithPosterUrl'
import { Movie } from '@/types/Movie'

export const useHome = () => {
  const [movies, setMovies] = useState<MovieWithPosterUrl[]>([])

  const shuffleArray = (array: []) => {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]
    }
    return shuffledArray
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getMovies('popular')
      const shuffledMovies = shuffleArray(response.results)

      const moviesArray: MovieWithPosterUrl[] = shuffledMovies
        .slice(0, 6)
        .map((movie: Movie) => ({
          id: movie.id,
          poster_url: getImage(movie.backdrop_path),
        }))

      setMovies(moviesArray)
    }

    fetchMovies()
  }, [])

  return { movies }
}
