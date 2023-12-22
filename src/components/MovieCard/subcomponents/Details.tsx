"use client"

import Image from "next/image"
import noImage from "@public/no-image.svg"
import { MOVIE_CREDITS, TMDB_IMAGE } from "@/services/paths"
import { Avatar, CircularProgress, Modal, useMediaQuery } from "@mui/material"
import { ArrowBack, Person } from "@mui/icons-material"
import { formatDate } from "@/utils/formatDate"
import { CastData, CrewData, MovieDetails } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { callAPI } from "@/services/api"
import { Carrousel } from "@/components/Carrousel"

export function Details({
  details,
  open,
  onClose,
}: {
  details: MovieDetails
  open: boolean
  onClose: () => void
}) {
  const isDefaultBreakpoint = useMediaQuery("(max-width:419px)")
  const isSmBreakpoint = useMediaQuery(
    "(min-width:420px) and (max-width:639px)"
  )
  const isMdBreakpoint = useMediaQuery(
    "(min-width:640px) and (max-width:859px)"
  )

  const { data, error, isLoading } = useQuery<{
    crew: CrewData[]
    cast: CastData[]
  }>({
    queryKey: ["credits", details?.id],
    queryFn: () => callAPI(MOVIE_CREDITS(details?.id)),
  })

  const crew = data?.crew
  const cast = data?.cast

  return (
    details && (
      <Modal
        open={open}
        onClose={onClose}
        disableAutoFocus
        className="scrollbar scrollbar-track-primary scrollbar-thumb-gray-800"
        sx={{ overflowY: "scroll" }}
      >
        <div className="mx-auto max-w-[1280px]">
          {isLoading && <CircularProgress className="text-onPrimary" />}

          {error && error?.message !== "" && <p>{error.message}</p>}

          {data && !error && !isLoading && (
            <main className="relative  min-h-screen w-full bg-black bg-opacity-90 text-onPrimary">
              <div className="absolute left-1 top-1 z-50 p-200">
                <button onClick={onClose}>
                  <ArrowBack className="text-onPrimary lg:text-[44px]" />
                </button>
              </div>

              <div className="mx-auto overflow-hidden 2xl:rounded-b-2xl">
                <Image
                  alt={`${details.id} image`}
                  src={
                    details.backdrop_path && details.backdrop_path !== ""
                      ? TMDB_IMAGE(details.backdrop_path, true)
                      : noImage
                  }
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                  }}
                />
              </div>

              <div className="flex flex-col gap-300 p-300 lg:gap-600 lg:p-500">
                {crew && crew.length > 0 && (
                  <>
                    <h1 className="max-w-[20ch] text-lg sm:max-w-[40ch] sm:text-[26px] lg:text-[36px] lg:leading-[45px]">
                      <strong>{details.title}</strong>
                      {details.release_date &&
                        " (" + details.release_date.slice(0, 4) + ")"}
                    </h1>

                    <h6 className="text-xs sm:text-[16px] lg:text-[26px]">
                      {details.tagline}
                    </h6>

                    <span className="flex flex-wrap gap-300">
                      {details.genres.map((genre) => (
                        <div
                          key={genre.id}
                          className="rounded-full bg-tertiary px-300 py-100 text-xs text-onTertiary sm:px-500 sm:py-200 sm:text-[16px] lg:px-500 lg:py-300 lg:text-[18px]"
                        >
                          {genre.name}
                        </div>
                      ))}
                    </span>

                    {details.overview !== "" && (
                      <>
                        <h2 className="sm:text-[28px] lg:text-[34px]">
                          Sinopse
                        </h2>

                        <p className="max-w-[50ch] text-xs sm:text-[16px] lg:text-[20px] lg:leading-8">
                          {details.overview}
                        </p>
                      </>
                    )}

                    <span className="flex items-center gap-200 lg:text-[20px] lg:leading-8">
                      <h2>Lançamento:</h2>

                      <h6 className="text-xs sm:text-[16px] lg:text-[20px] lg:leading-8">
                        {formatDate(details.release_date)}
                      </h6>
                    </span>

                    <span className="flex items-center gap-100 lg:text-[20px] lg:leading-8">
                      <h2>Duração:</h2>

                      <h6 className="text-xs sm:text-[16px] lg:text-[20px] lg:leading-8">
                        {Math.floor(details.runtime / 60)}h
                        {details.runtime % 60 !== 0 &&
                          ` ${details.runtime % 60}m`}
                      </h6>
                    </span>

                    {crew.find((person) => person.job === "Director") && (
                      <span className="flex items-center gap-100 lg:text-[20px] lg:leading-8">
                        <h2>Diretor:</h2>

                        <h6 className="text-xs sm:text-[16px] lg:text-[20px] lg:leading-8">
                          {
                            crew.find((person) => person.job === "Director")
                              ?.name
                          }
                        </h6>
                      </span>
                    )}

                    {crew.find((person) => person.job === "Writer") && (
                      <span className="flex items-center gap-100 lg:text-[20px] lg:leading-8">
                        <h2>Escritor:</h2>

                        <h6 className="text-xs sm:text-[16px] lg:text-[20px] lg:leading-8">
                          {crew.find((person) => person.job === "Writer")?.name}
                        </h6>
                      </span>
                    )}
                  </>
                )}

                {cast && cast.length > 0 && (
                  <>
                    <h1 className="sm:text-[28px] lg:text-[34px]">Atores</h1>

                    <Carrousel>
                      {cast.slice(0, 15).map((person) => (
                        <div
                          key={person.id}
                          className="flex flex-col items-center gap-1"
                        >
                          {person.profile_path ? (
                            <Avatar
                              src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                              alt={person.name}
                              sx={{
                                width: isDefaultBreakpoint
                                  ? 85
                                  : isSmBreakpoint || isMdBreakpoint
                                    ? 120
                                    : 160,
                                height: isDefaultBreakpoint
                                  ? 85
                                  : isSmBreakpoint || isMdBreakpoint
                                    ? 120
                                    : 160,
                              }}
                            />
                          ) : (
                            <Avatar
                              sx={{
                                width: isDefaultBreakpoint
                                  ? 85
                                  : isSmBreakpoint || isMdBreakpoint
                                    ? 120
                                    : 160,
                                height: isDefaultBreakpoint
                                  ? 85
                                  : isSmBreakpoint || isMdBreakpoint
                                    ? 120
                                    : 160,
                              }}
                            >
                              <Person
                                sx={{
                                  width: isDefaultBreakpoint
                                    ? 70
                                    : isSmBreakpoint || isMdBreakpoint
                                      ? 90
                                      : 110,
                                  height: isDefaultBreakpoint
                                    ? 70
                                    : isSmBreakpoint || isMdBreakpoint
                                      ? 90
                                      : 110,
                                }}
                              />
                            </Avatar>
                          )}

                          <span className="w-[15ch] whitespace-nowrap text-center">
                            <h1 className="overflow-hidden text-ellipsis text-[14px] sm:text-[16px] lg:text-[20px]">
                              {person.name}
                            </h1>

                            <h2 className="overflow-hidden text-ellipsis text-[11px] sm:text-[12px] lg:text-[15px]">
                              {person.character}
                            </h2>
                          </span>
                        </div>
                      ))}
                    </Carrousel>
                  </>
                )}
              </div>
            </main>
          )}
        </div>
      </Modal>
    )
  )
}
