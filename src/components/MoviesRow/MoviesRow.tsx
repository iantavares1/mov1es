import { useMoviesRow } from './hooks/useMoviesRow'
import { Box, Skeleton, Typography } from '@mui/material'
import { MovieCard, Swiper } from '..'
import { MovieList } from '@/types'
import { getImage } from '@/services/api'

import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

type MoviesRowProps = {
  list: MovieList
  title?: string
}

export const MoviesRow = ({ list, title }: MoviesRowProps) => {
  const { movies } = useMoviesRow(list)

  if (movies.length < 1) return <Skeleton variant="rounded" height={360} />

  return (
    <Box width={'100%'}>
      {title && (
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, px: 1 }}>
          {title}
        </Typography>
      )}
      <Swiper
        settings={{
          speed: 500,
          modules: [Navigation],
          navigation: true,
          spaceBetween: '1%',
          slidesPerView: 6,
          slidesPerGroup: 2,
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard
              title={movie.title}
              imageUrl={getImage(movie.poster_path)}
              voteAverage={movie.vote_average}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
