import { useEffect, useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { MovieWithPosterUrl } from '@/types/MovieWithPosterUrl'

type PosterProps = { movies: MovieWithPosterUrl[] }

export const Posters = ({ movies }: PosterProps) => {
  const theme = useTheme()
  const [movieId, setMovieId] = useState(0)

  useEffect(() => {
    const posterLoop = setInterval(() => {
      setMovieId((previous) =>
        previous === movies.length - 1 ? 0 : previous + 1,
      )
    }, 6000)

    return () => clearInterval(posterLoop)
  }, [movies.length])

  if (movies.length < 1) return <Typography variant="h6">Loading...</Typography>

  return (
    <Box
      key={movies[movieId].id}
      sx={{
        width: '100%',
        height: theme.size(550),
        margin: '0 auto',
        borderRadius: theme.size(10),
        background: `url(${movies[movieId].poster_url}) no-repeat center / cover`,
      }}
    />
  )
}
