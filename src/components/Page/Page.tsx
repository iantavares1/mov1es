import { SearchProvider } from './contexts/SearchContext'
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
      {hasTopBar && <TopBar />}
      <PageContent style={{ marginTop: hasTopBar ? TOPBAR_HEIGHT : 0 }}>
        {children}
      </PageContent>
      <Footer />
    </SearchProvider>
  )
}
