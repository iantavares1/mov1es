import { useHome } from './hooks/useHome'
import { Page, MoviesRow } from '@/components'
import { Posters } from './components/Posters'

export const Home = () => {
  const { movies } = useHome()

  return (
    <Page hasTopBar>
      <Posters movies={movies} />
      <MoviesRow list="now_playing" />
      <MoviesRow list="popular" />
    </Page>
  )
}
