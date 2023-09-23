import { useHome } from './hooks/useHome'
import { MoviesRow } from '@/components'
import { Posters } from './components/Posters/Posters'

export const Home = () => {
  const { movies } = useHome()

  return (
    <>
      <Posters movies={movies} />
      <MoviesRow list="now_playing" title="Em alta" />
      <MoviesRow list="popular" title="Popular" />
      <MoviesRow list="top_rated" title="Melhor avaliados" />
    </>
  )
}
