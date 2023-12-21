"use client"

import { useQuery } from "@tanstack/react-query"
import { MovieCard } from "@/components/MovieCard"
import { callAPI } from "@/services/api"
import { SEARCH_MOVIE } from "@/services/paths"
import { Movie } from "@/types"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { useState } from "react"

export default function Search({
  params: { query },
}: {
  params: { query: string }
}) {
  const [page, setPage] = useState(1)

  const { data, isLoading } = useQuery<{
    results: Movie[]
    page: number
    total_pages: number
  }>({
    queryKey: ["movies", query, page],
    queryFn: () => callAPI(SEARCH_MOVIE(query, page)),
  })
  const movies = data?.results
  const totalPages = data?.total_pages

  if (isLoading) return <div className="px-300 pt-[8dvh]">Loading...</div>

  if (!movies || movies.length < 1)
    return <div className="px-300 pt-[8dvh]">Nenhum filme encontrado</div>

  return (
    <div className="px-300 pt-[8dvh]">
      <h1 className="mb-300">{`resultados de "${query}"`}</h1>

      <div className="grid grid-cols-100 justify-items-center gap-200">
        {movies
          .filter((movie) => movie.poster_path && movie.backdrop_path)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>

      {totalPages && totalPages > 1 && (
        <div className="gap-100pt-400 flex w-full">
          <button onClick={() => page > 1 && setPage((prev) => prev - 1)}>
            <KeyboardArrowLeft />
          </button>

          <div className="overflow-x-scroll whitespace-nowrap">
            {Array.from({ length: data.total_pages }, (_, index) => index)
              .slice(1, 11)
              .map((pageNumber) => (
                <button
                  className={`m-2 h-8 w-8 break-keep rounded-full border-2 border-solid border-onPrimary ${
                    page === pageNumber && "bg-onPrimary text-primary"
                  }`}
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
          </div>

          <button
            onClick={() =>
              totalPages &&
              page < totalPages - 1 &&
              page < 10 &&
              setPage((prev) => prev + 1)
            }
          >
            <KeyboardArrowRight />
          </button>
        </div>
      )}
    </div>
  )
}
