import { SearchProvider } from './contexts/SearchContext'
import { Container } from '@mui/material'
import { TOPBAR_HEIGHT, TopBar } from './components/TopBar/TopBar'
import { PageContent } from './components/PageContent/PageContent'
import { Footer } from './components/Footer/Footer'

type PageProps = {
  hasTopBar?: boolean
  children: React.ReactNode
}

export const Page = ({ hasTopBar = true, children }: PageProps) => {
  return (
    <SearchProvider>
      <Container>
        {hasTopBar && <TopBar />}
        <PageContent sx={{ marginTop: hasTopBar ? TOPBAR_HEIGHT : 0 }}>
          {children}
        </PageContent>
        <Footer />
      </Container>
    </SearchProvider>
  )
}
