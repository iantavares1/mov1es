import { useDetails } from './hooks/useDetails'
import { Avatar, Box, Button, Modal, Typography, useTheme } from '@mui/material'
import { CloseOutlined, Person } from '@mui/icons-material'
import { formatDate } from '@/utils'
import { getImage } from '@/services/api'

import { Swiper } from '..'
import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

type DetailsProps = {
  movieId: number
  open: boolean
  onClose: () => void
}

export const Details = ({ movieId, open, onClose }: DetailsProps) => {
  const theme = useTheme()
  const { details, cast, crew } = useDetails(Number(movieId))

  return (
    details && (
      <Modal
        open={open}
        onClose={onClose}
        disableAutoFocus
        sx={{ overflowX: 'hidden', overflowY: 'scroll' }}
      >
        <Box
          sx={{
            width: '80%',
            maxWidth: theme.size(880),
            mx: 'auto',
            my: 4,
            background: 'rgba(3,3,3,0.95)',
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Button
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: 0,
                borderRadius: 99,
              }}
            >
              <CloseOutlined
                sx={{
                  fontSize: 32,
                  borderRadius: 99,
                  color: '#fff',
                  background: theme.palette.background.default,
                }}
              />
            </Button>
            <img
              src={getImage(details.backdrop_path)}
              alt={`${movieId} image`}
              width={'100%'}
              style={{
                background: `url(${details})`,
                aspectRatio: 'auto',
              }}
            />
          </Box>
          <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.size(40),
              }}
            >
              <Box display={'flex'} flexDirection={'column'} gap={1}>
                <Box display={'flex'} gap={theme.size(20)}>
                  <Typography variant="h3" maxWidth={'20ch'}>
                    <strong>{details.title}</strong>
                    {`  (${details.release_date.slice(0, 4)})`}
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  {details.tagline}
                </Typography>
                <Box display={'flex'} gap={theme.size(10)}>
                  {details.genres.map((genre) => (
                    <Button
                      key={genre.id}
                      variant="outlined"
                      sx={{ fontSize: theme.fontSize(12), color: '#fff' }}
                    >
                      {genre.name}
                    </Button>
                  ))}
                </Box>
              </Box>

              {details.overview !== '' && (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  gap={theme.size(10)}
                >
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    Sinopse
                  </Typography>
                  <Typography variant="body1" sx={{ maxWidth: '50ch' }}>
                    {details.overview}
                  </Typography>
                </Box>
              )}

              <Box
                display={'flex'}
                flexDirection={'column'}
                gap={theme.size(15)}
              >
                <Box display={'flex'} alignItems={'center'} gap={1}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Lançamento:
                  </Typography>
                  <Typography variant="h6">
                    {formatDate(details.release_date)}
                  </Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={1}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Duração:
                  </Typography>
                  <Typography variant="h6">
                    {Math.floor(details.runtime / 60)}h
                    {details.runtime % 60 !== 0 && ` ${details.runtime % 60}m`}
                  </Typography>
                </Box>

                {crew.find((person) => person.job === 'Director') && (
                  <Box display={'flex'} alignItems={'center'} gap={1}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Diretor:
                    </Typography>
                    <Typography variant="h6">
                      {crew.find((person) => person.job === 'Director')?.name}
                    </Typography>
                  </Box>
                )}
                {crew.find((person) => person.job === 'Writer') && (
                  <Box display={'flex'} alignItems={'center'} gap={1}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Escritor:
                    </Typography>
                    <Typography variant="h6">
                      {crew.find((person) => person.job === 'Writer')?.name}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                }}
              >
                Atores
              </Typography>
              <Box>
                <Swiper
                  settings={{
                    speed: 500,
                    modules: [Navigation],
                    navigation: true,
                    spaceBetween: '1%',
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                  }}
                >
                  {cast.slice(0, 15).map((person, index) => (
                    <SwiperSlide key={index}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        {person.profile_path && (
                          <Avatar
                            src={getImage(person.profile_path)}
                            alt={person.name}
                            sx={{ width: 200, height: 200 }}
                          />
                        )}
                        {!person.profile_path && (
                          <Avatar
                            sx={{
                              width: 200,
                              height: 200,
                            }}
                          >
                            <Person sx={{ fontSize: 150 }} />
                          </Avatar>
                        )}
                        <Box textAlign={'center'}>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {person.name}
                          </Typography>
                          <Typography variant="h6">
                            {person.character}
                          </Typography>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    )
  )
}
