import { useState } from 'react'
import { Box, Skeleton, styled } from '@mui/material'
import { Details } from '@/components/Details/Details'
import { MovieWithPosterUrl } from '@/types'

import { Swiper } from '@/components'
import { SwiperSlide } from 'swiper/react'

const BoxStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  height: theme.size(550),
  margin: '0 auto',
  borderRadius: theme.size(10),
}))

type PostersProps = { movies: MovieWithPosterUrl[] }

export const Posters = ({ movies }: PostersProps) => {
  const [movieId, setMovieId] = useState(0)
  const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false)
  const handleOpenDetailsModal = () => setDetailsModalIsOpen(true)
  const handleCloseDetailsModal = () => setDetailsModalIsOpen(false)

  if (movies.length < 1)
    return (
      <BoxStyled>
        <Skeleton variant="rounded" height={'100%'} />
      </BoxStyled>
    )

  return (
    <>
      <Swiper
        settings={{
          autoplay: { delay: 6000 },
          speed: 1000,
          loop: true,
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <>
              <BoxStyled
                onClick={() => {
                  setMovieId(movie.id)
                  handleOpenDetailsModal()
                }}
                sx={{
                  cursor: 'pointer',
                  background: `url(${movie.poster_url}) no-repeat center / cover`,
                }}
              />
            </>
          </SwiperSlide>
        ))}
      </Swiper>
      {movieId !== 0 && (
        <Details
          movieId={movieId}
          open={detailsModalIsOpen}
          onClose={handleCloseDetailsModal}
        />
      )}
    </>
  )
}
