"use client"

import Image from "next/image"
import noImage from "@public/no-image.svg"
import { useState } from "react"
import { MOVIE_DETAILS, TMDB_IMAGE } from "@/services/paths"
import { StarOutlined } from "@mui/icons-material"
import { Movie, MovieDetails } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { callAPI } from "@/services/api"
import { Details } from "./subcomponents/Details"

export function MovieCard({ movie }: { movie: Movie }) {
  const [detailsIsOpen, setDetailsIsOpen] = useState(false)

  const { data: details } = useQuery<MovieDetails>({
    queryKey: ["details", movie.id],
    queryFn: () => callAPI(MOVIE_DETAILS(movie.id)),
  })

  const handleOpenDetails = () => setDetailsIsOpen(true)
  const handleCloseDetails = () => setDetailsIsOpen(false)

  return (
    <div>
      <span
        onClick={handleOpenDetails}
        key={movie.id}
        className="relative flex h-[200px] w-[100px] scale-95 transform cursor-pointer flex-col gap-1 transition  duration-200 hover:scale-100 sm:h-[300px] sm:w-[150px] lg:h-[400px] lg:w-[200px]"
      >
        <Image
          src={
            movie?.poster_path !== "" ? TMDB_IMAGE(movie.poster_path) : noImage
          }
          alt={`${movie.title}-poster}`}
          width={0}
          height={0}
          sizes="100"
          priority
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 12,
          }}
        />

        <div className="flex flex-col items-start font-bold sm:mt-2 sm:gap-2 lg:gap-3">
          <span className="w-[12ch] truncate text-xs sm:text-[18px] lg:text-[22px]">
            {movie.title === undefined ? movie.name : movie.title}
          </span>

          <div className="flex items-center gap-1 text-xs sm:text-[18px] lg:text-[22px]">
            <StarOutlined className="text-amber-500" />

            {movie?.vote_average?.toFixed(1)}
          </div>
        </div>
      </span>

      {details && (
        <Details
          details={details}
          open={detailsIsOpen}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  )
}
