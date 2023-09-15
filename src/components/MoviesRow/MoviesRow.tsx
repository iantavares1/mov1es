import { useMoviesRow } from './hooks/useMoviesRow'
import { Box, Skeleton } from '@mui/material'
import { MovieCard } from '..'
import { MovieList } from '@/types'
import { getImage } from '@/services/api'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

type MoviesRowProps = {
  list: MovieList
}

export const MoviesRow = ({ list }: MoviesRowProps) => {
  const { movies } = useMoviesRow(list)

  if (movies.length < 1) return <Skeleton variant="rounded" height={360} />

  return (
    <Box width={'100%'}>
      <Swiper
        speed={500}
        modules={[Navigation]}
        navigation
        spaceBetween={'1%'}
        slidesPerView={6}
        slidesPerGroup={2}
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
