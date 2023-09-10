import { useMoviesRow } from './hooks/useMoviesRow'
import { MovieList } from '../../types/MovieList'
import { Box } from '@mui/material'
import { MovieCard } from '..'
import { getImage } from '../../services/api'

type MoviesRowProps = {
  list: MovieList
}

export const MoviesRow = ({ list }: MoviesRowProps) => {
  const { movies } = useMoviesRow(list)

  return (
    <Box display={'flex'} gap={3}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          imageUrl={getImage(movie.poster_path)}
        />
      ))}
    </Box>
  )
}
