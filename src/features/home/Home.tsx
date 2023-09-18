import { useHome } from './hooks/useHome'
import { Page, MoviesRow } from '@/components'
import { Posters } from './components/Posters'

export const Home = () => {
  const { movies } = useHome()

  return (
    <Page hasTopBar>
      <Posters movies={movies} />
      <MoviesRow list="now_playing" title="Em alta" />
      <MoviesRow list="popular" title="Popular" />
      <MoviesRow list="top_rated" title="Melhor avaliados" />
    </Page>
  )
}
