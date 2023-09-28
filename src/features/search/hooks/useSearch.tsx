import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Movie } from '@/types'
import { searchMovie } from '@/services/api'

type SearchResultsData = {
  pageId: number
  results: Movie[]
}[]

export const useSearch = () => {
  const { query } = useParams()
  const [tempData, setTempData] = useState<SearchResultsData>([])
  const [pageTotal, setPageTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const isLastPage = pageTotal === currentPage

  const incrementPage = () => setCurrentPage((prev) => prev + 1)

  const fetchSearchResults = async () => {
    const response = await searchMovie(query || '', currentPage)
    const results: Movie[] = response.results
    const pageId = currentPage

    if (currentPage === 1) {
      setPageTotal(response.total_pages)
      setTempData([{ pageId, results }])
      return [{ pageId, results }]
    } else {
      setTempData((prev) => [...prev, { pageId, results }])
      return [...tempData, { pageId, results }]
    }
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['results', query, currentPage],
    queryFn: fetchSearchResults,
  })

  return { query, data, isLoading, error, isLastPage, incrementPage }
}
