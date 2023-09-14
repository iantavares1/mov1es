import { Box, css, styled } from '@mui/material'

export const FooterWrapper = styled(Box)(
  ({ theme }) => css`
    width: 100vw;
    padding: 0 ${theme.size(100)};
  `,
)

export const FooterStyled = styled(Box)(
  ({ theme }) => css`
    min-height: ${theme.size(120)};
    background: ${theme.palette.background.default};
    display: flex;
    justify-content: space-between;
  `,
)
