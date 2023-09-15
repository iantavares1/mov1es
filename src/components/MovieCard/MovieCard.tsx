import { Box, Typography } from '@mui/material'
import { Star } from '@mui/icons-material'

type MovieCardProps = {
  title: string
  imageUrl: string
  voteAverage: number
}

export const MovieCard = ({ title, imageUrl, voteAverage }: MovieCardProps) => {
  return (
    <Box
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
  )
}
