"use client"

import Image from "next/image"
import noImage from "../../public/no-image.svg"
import { useState } from "react"
import { MOVIE_DETAILS, TMDB_IMAGE } from "@/services/paths"
import { useFetch } from "@/services/useFetch"
import { Details } from "./Details"
import { StarOutlined } from "@mui/icons-material"
import { Movie, MovieDetails } from "@/types"

export function MovieCard({ movie }: { movie: Movie }) {
  const [detailsIsOpen, setDetailsIsOpen] = useState(false)

  const { data: details } = useFetch<MovieDetails>(MOVIE_DETAILS(movie.id))

  const handleOpenDetails = () => setDetailsIsOpen(true)
  const handleCloseDetails = () => setDetailsIsOpen(false)

  return (
    <>
      <div
        onClick={handleOpenDetails}
        key={movie.id}
        className="relative flex h-[200px] w-[100px] scale-95 transform cursor-pointer flex-col  gap-1 transition duration-200 hover:scale-100"
      >
        <Image
          src={
            movie?.poster_path !== "" ? TMDB_IMAGE(movie.poster_path) : noImage
          }
          alt={`${movie.title}-poster}`}
          width={0}
          height={0}
          sizes="100"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 3,
          }}
        />

        <div className="flex flex-col items-start text-lg font-bold">
          <span className="w-[12ch] truncate text-xs">
            {movie.title === undefined ? movie.name : movie.title}
          </span>

          <div className="flex items-center gap-1 text-xs">
            <StarOutlined className="text-amber-500" />

            {movie?.vote_average?.toFixed(1)}
          </div>
        </div>
      </div>

      {details && (
        <Details
          details={details}
          open={detailsIsOpen}
          onClose={handleCloseDetails}
        />
      )}
    </>
  )
}
