import Image from "next/image"
import noImage from "../../public/no-image.svg"
import { MOVIE_CREDITS, TMDB_IMAGE } from "@/services/paths"
import { Avatar, CircularProgress, Modal } from "@mui/material"
import { ArrowBack, Person } from "@mui/icons-material"
import { formatDate } from "../utils/formatDate"
import { CastData, CrewData, MovieDetails } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { callAPI } from "@/services/api"

export function Details({
  details,
  open,
  onClose,
}: {
  details: MovieDetails
  open: boolean
  onClose: () => void
}) {
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
    <Modal
      open={open}
      onClose={onClose}
      disableAutoFocus
      sx={{ overflowY: "scroll" }}
    >
      <>
        {isLoading && <CircularProgress className="text-onPrimary" />}

        {error && error?.message !== "" && <p>{error.message}</p>}

        {data && !error && !isLoading && (
          <main className="min-h-full bg-black  bg-opacity-90 text-onPrimary">
            <button
              onClick={onClose}
              className="absolute left-1 top-1 z-50 rounded-full"
            >
              <ArrowBack className="text-onPrimary" />
            </button>

            <div>
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

            <div className="flex flex-col gap-300 p-300">
              {crew && crew.length > 0 && (
                <>
                  <h1 className="max-w-[20ch] text-lg">
                    <strong>{details.title}</strong>
                    {" (" + details.release_date.slice(0, 4) + ")"}
                  </h1>

                  <h6 className="text-xs">{details.tagline}</h6>

                  <span className="flex flex-wrap gap-300">
                    {details.genres.map((genre) => (
                      <button
                        key={genre.id}
                        className="rounded-md bg-tertiary px-300 py-100 text-xs text-onTertiary"
                      >
                        {genre.name}
                      </button>
                    ))}
                  </span>

                  {details.overview !== "" && (
                    <>
                      <h2>Sinopse</h2>

                      <p className="max-w-[50ch] text-xs">{details.overview}</p>
                    </>
                  )}

                  <span className="flex items-center gap-200">
                    <h2>Lançamento:</h2>

                    <h6 className="text-xs">
                      {formatDate(details.release_date)}
                    </h6>
                  </span>

                  <span className="flex items-center gap-100">
                    <h2>Duração:</h2>

                    <h6 className="text-xs">
                      {Math.floor(details.runtime / 60)}h
                      {details.runtime % 60 !== 0 &&
                        ` ${details.runtime % 60}m`}
                    </h6>
                  </span>

                  {crew.find((person) => person.job === "Director") && (
                    <span className="flex items-center gap-100">
                      <h2>Diretor:</h2>

                      <h6 className="text-xs">
                        {crew.find((person) => person.job === "Director")?.name}
                      </h6>
                    </span>
                  )}

                  {crew.find((person) => person.job === "Writer") && (
                    <span className="flex items-center gap-100">
                      <h2>Escritor:</h2>

                      <h6 className="text-xs">
                        {crew.find((person) => person.job === "Writer")?.name}
                      </h6>
                    </span>
                  )}
                </>
              )}

              {cast && cast.length > 0 && (
                <>
                  <h1>Atores</h1>

                  <span className="flex items-center gap-1 overflow-x-scroll">
                    {cast.slice(0, 15).map((person, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-1"
                      >
                        {person.profile_path ? (
                          <Avatar
                            src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                            alt={person.name}
                            sx={{ width: 85, height: 85 }}
                          />
                        ) : (
                          <Avatar
                            sx={{
                              width: 85,
                              height: 85,
                            }}
                          >
                            <Person sx={{ fontSize: 70 }} />
                          </Avatar>
                        )}

                        <span className="w-[15ch] whitespace-nowrap text-center">
                          <h1 className="overflow-hidden text-ellipsis text-[14px]">
                            {person.name}
                          </h1>

                          <h2 className="overflow-hidden text-ellipsis text-[11px]">
                            {person.character}
                          </h2>
                        </span>
                      </div>
                    ))}
                  </span>
                </>
              )}
            </div>
          </main>
        )}
      </>
    </Modal>
  )
}
