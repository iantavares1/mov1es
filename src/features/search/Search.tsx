import { useSearch } from './hooks/useSearch'
import { MovieCard } from '@/components'
import { InfiniteScroll } from '@/components/InfiniteScroll/InfiniteScroll'
import { Box, Typography } from '@mui/material'
import { getImage } from '@/services/api'

export const Search = () => {
  const { query, data, isLoading, error, isLastPage, incrementPage } =
    useSearch()

  if (isLoading) return <>Loading...</>

  if (error) return <>{error}</>

  return data?.some((page) => page.results.length > 1) ? (
    <Box mt={2}>
      <Typography
        variant="h5"
        mb={2}
        fontWeight={600}
      >{`"${query}"`}</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(17rem, 1fr))',
          rowGap: 8,
          columnGap: 1.5,
          justifyItems: 'center',
        }}
      >
        {data.map(({ results }) =>
          results
            .filter((movie) => movie.poster_path && movie.backdrop_path)
            .map((movie) => {
              const { id, title } = movie

              return (
                <MovieCard
                  key={id}
                  id={id}
                  imageUrl={getImage(movie.poster_path)}
                  title={title}
                  voteAverage={movie.vote_average}
                />
              )
            }),
        )}
        {!isLastPage && <InfiniteScroll loadMore={incrementPage} />}
      </Box>
    </Box>
  ) : (
    'Not Found'
  )
}
