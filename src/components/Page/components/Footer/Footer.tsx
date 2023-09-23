import { useNavigate } from 'react-router-dom'
import { FooterWrapper, FooterStyled } from './Footer.styles'
import { Box, Divider, Typography } from '@mui/material'
import { Logo } from '@/assets/Logo'
import { TMDBLogo } from '@/assets/TMDBLogo'

export const Footer = () => {
  const navigate = useNavigate()

  return (
    <FooterWrapper component={'footer'}>
      <Divider sx={{ background: '#fff', opacity: 0.2 }} />
      <FooterStyled>
        <Logo onClick={() => navigate('/')} />
        <Box display={'flex'} gap={2} alignItems={'center'}>
          <a
            target="_blank"
            href="https://www.themoviedb.org/"
            rel="noreferrer noopener"
          >
            <TMDBLogo />
          </a>
          <Typography variant="body2" sx={{ maxWidth: '30ch' }}>
            Este produto usa a API TMDB, mas não é endossado ou certificado pelo
            TMDB.
          </Typography>
        </Box>
      </FooterStyled>
    </FooterWrapper>
  )
}
