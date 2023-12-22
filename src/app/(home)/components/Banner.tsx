"use client"

import Image from "next/image"
import { useState } from "react"
import { MOVIE_DETAILS, TMDB_IMAGE } from "@/services/paths"
import { Movie, MovieDetails } from "@/types"
import { Details } from "../../../components/MovieCard/subcomponents/Details"
import { useQuery } from "@tanstack/react-query"
import { callAPI } from "@/services/api"

export function Banner({ poster }: { poster: Movie }) {
  const [detailsIsOpen, setDetailsIsOpen] = useState(false)

  const { data } = useQuery<MovieDetails>({
    queryKey: ["details", poster.id],
    queryFn: () => callAPI(MOVIE_DETAILS(poster.id)),
  })

  return (
    <>
      <div
        className="mx-auto mb-300 cursor-pointer overflow-hidden 2xl:rounded-b-xl"
        onClick={() => setDetailsIsOpen(true)}
      >
        <Image
          alt={`poster de  ${poster.title}`}
          src={TMDB_IMAGE(poster.backdrop_path, true)}
          placeholder="blur"
          blurDataURL={TMDB_IMAGE(poster.backdrop_path, true)}
          priority
          width={0}
          height={0}
          sizes="100"
          style={{
            width: "100%",
          }}
        />
      </div>

      {data && (
        <Details
          open={detailsIsOpen}
          onClose={() => setDetailsIsOpen(false)}
          details={data}
        />
      )}
    </>
  )
}
