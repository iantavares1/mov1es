import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Star } from '@mui/icons-material'
import { Details } from '../Details/Details'

type MovieCardProps = {
  id: number
  imageUrl: string
  title: string
  voteAverage: number
}

export const MovieCard = ({
  id,
  title,
  imageUrl,
  voteAverage,
}: MovieCardProps) => {
  const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false)
  const handleOpenDetailsModal = () => setDetailsModalIsOpen(true)
  const handleCloseDetailsModal = () => setDetailsModalIsOpen(false)

  return (
    <>
      <Box
        onClick={handleOpenDetailsModal}
        width={270}
        sx={{
          cursor: 'pointer',
          transition: 'all 0.15s',
          transform: 'scale(0.95)',
          '&:hover': { transform: 'scale(1)' },
        }}
      >
        <img
          width={270}
          height={380}
          src={imageUrl}
          alt={title}
          style={{
            borderRadius: 10,
          }}
        />
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </Typography>
        <Box display={'flex'} gap={0.5}>
          <Star sx={{ color: 'gold' }} />
          <Typography
            variant="body1"
            fontWeight={600}
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {voteAverage.toFixed(1)}
          </Typography>
        </Box>
      </Box>
      <Details
        movieId={id}
        open={detailsModalIsOpen}
        onClose={handleCloseDetailsModal}
      />
    </>
  )
}
