import { Logo } from '@/assets/Logo'
import { Box, Divider, Typography, css, styled } from '@mui/material'
import { TMDBLogo } from '@/assets/TMDBLogo'

const FooterStyled = styled(Box)(
  ({ theme }) => css`
    min-height: 120px;
    width: 100vw;
    background: ${theme.palette.background.default};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
)

export const Footer = () => {
  return (
    <Box component={'footer'} px={12} width={'100vw'}>
      <Divider sx={{ width: '85%', background: '#fff', opacity: 0.2 }} />
      <FooterStyled px={12}>
        <Logo />
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
    </Box>
  )
}
