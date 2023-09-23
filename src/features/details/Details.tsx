import { useParams } from 'react-router-dom'
import { useDetails } from './hooks/useDetails'
import {
  Avatar,
  Box,
  Button,
  Skeleton,
  Typography,
  useTheme,
} from '@mui/material'
import { Person } from '@mui/icons-material'
import { MoviesRow } from '@/components'
import { formatDate } from '@/utils'
import { getImage } from '@/services/api'

export const Details = () => {
  const theme = useTheme()
  const { movieId } = useParams()
  const { details, cast, crew, recommendations } = useDetails(Number(movieId))

  if (!details) return <Skeleton variant="rounded" height={'80vh'} />

  return (
    <>
      <img
        src={getImage(details.backdrop_path)}
        alt={`${movieId} image`}
        width={'100%'}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -10,
          background: `url(${details})`,
          opacity: 0.08,
          aspectRatio: 'auto',
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Box
          sx={{
            mt: theme.size(45),
            display: 'flex',
            justifyContent: 'center',
            gap: theme.size(60),
          }}
        >
          <Box width={theme.size(440)} height={theme.size(610)}>
            <img
              src={getImage(details.poster_path)}
              alt={`${movieId} image`}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: theme.size(10),
              }}
            />
          </Box>

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

            <Box display={'flex'} flexDirection={'column'} gap={theme.size(15)}>
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
          <Box display={'flex'} gap={6}>
            {cast.map((person, index) => (
              <Box
                key={index}
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
                  <Typography variant="h6">{person.character}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {recommendations.length > 0 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
              }}
            >
              Recomendados
            </Typography>
            <MoviesRow list={recommendations} />
          </Box>
        )}
      </Box>
    </>
  )
}
