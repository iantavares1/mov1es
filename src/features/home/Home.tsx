import { useEffect, useState } from 'react'

import { Page, MovieCard } from '../../components'
import { Movie } from '../../types/Movie'
import { getImage, getPopularMovies } from '../../services/api'
import { Box } from '@mui/material'

export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const getMovies = async () => {
      const response = await getPopularMovies()
      setMovies(response.results)
    }

    getMovies()
  }, [])

  return (
    <Page hasTopBar>
      <Box display={'flex'} gap={8}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            imageUrl={getImage(movie.poster_path)}
          />
        ))}
      </Box>
      <Box display={'flex'} gap={8}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            imageUrl={getImage(movie.poster_path)}
          />
        ))}
      </Box>
    </Page>
  )
}
