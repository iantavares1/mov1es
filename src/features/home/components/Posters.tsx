import { useEffect, useState } from 'react'
import { Box, Skeleton, styled } from '@mui/material'
import { MovieWithPosterUrl } from '@/types/MovieWithPosterUrl'

const BoxStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  height: theme.size(550),
  margin: '0 auto',
  borderRadius: theme.size(10),
}))

type PostersProps = { movies: MovieWithPosterUrl[] }

export const Posters = ({ movies }: PostersProps) => {
  const [movieId, setMovieId] = useState(0)

  useEffect(() => {
    const posterLoop = setInterval(() => {
      setMovieId((previous) =>
        previous === movies.length - 1 ? 0 : previous + 1,
      )
    }, 6000)

    return () => clearInterval(posterLoop)
  }, [movies.length])

  if (movies.length < 1)
    return (
      <BoxStyled>
        <Skeleton variant="rounded" height={'100%'} />
      </BoxStyled>
    )

  return (
    <BoxStyled
      sx={{
        background: `url(${movies[movieId].poster_url}) no-repeat center / cover`,
      }}
    />
  )
}
