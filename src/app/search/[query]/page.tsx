"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { MovieCard } from "@/components/MovieCard/MovieCard"
import { callAPI } from "@/services/api"
import { SEARCH_MOVIE } from "@/services/paths"
import { Movie } from "@/types"
import { useMediaQuery } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"

export default function Search({
  params: { query },
}: {
  params: { query: string }
}) {
  const [page, setPage] = useState(1)

  const isDefaultBreakpoint = useMediaQuery("(max-width:419px)")
  const isSmBreakpoint = useMediaQuery(
    "(min-width:420px) and (max-width:639px)"
  )
  const isMdBreakpoint = useMediaQuery(
    "(min-width:640px) and (max-width:859px)"
  )

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

  if (isLoading)
    return (
      <div className="px-300 pt-[8dvh] lg:px-700 lg:text-[30px] 2xl:px-0">
        Loading...
      </div>
    )

  if (!movies || movies.length < 1)
    return (
      <div className="px-300 pt-[8dvh] lg:px-700 lg:text-[30px] 2xl:px-0">
        Nenhum filme encontrado
      </div>
    )

  return (
    <div className="px-300 pt-[8dvh] sm:px-500 lg:px-700 2xl:px-0">
      <h1 className="mb-300 sm:text-[22px] lg:text-[30px]">{`resultados de "${query}"`}</h1>

      <div className="grid max-w-[1280px] grid-cols-100 justify-items-center gap-200 sm:grid-cols-200 sm:gap-500 lg:grid-cols-300 lg:gap-1000 2xl:grid-cols-400 ">
        {movies
          .filter((movie) => movie.poster_path && movie.backdrop_path)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>

      {totalPages && totalPages > 1 && (
        <div className="flex w-full justify-center gap-100 pt-400">
          <button onClick={() => page > 1 && setPage((prev) => prev - 1)}>
            <KeyboardArrowLeft
              sx={{
                fontSize: isDefaultBreakpoint
                  ? 24
                  : isSmBreakpoint || isMdBreakpoint
                    ? 32
                    : 44,
              }}
            />
          </button>

          <div className="overflow-x-scroll whitespace-nowrap md:overflow-hidden">
            {Array.from({ length: data.total_pages }, (_, index) => index)
              .slice(1, 11)
              .map((pageNumber) => (
                <button
                  className={`m-2 h-8 w-8 break-keep rounded-full border-2 border-solid border-onPrimary lg:h-10 lg:w-10 ${
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
            <KeyboardArrowRight
              sx={{
                fontSize: isDefaultBreakpoint
                  ? 24
                  : isSmBreakpoint || isMdBreakpoint
                    ? 32
                    : 44,
              }}
            />
          </button>
        </div>
      )}
    </div>
  )
}
