import Image from "next/image"
import { TMDB_IMAGE } from "@/services/paths"
import { Movie } from "@/types"

export function Banner({ poster }: { poster: Movie }) {
  return (
    <div className="mb-3">
      <Image
        alt={`poster de  ${poster.title}`}
        src={TMDB_IMAGE(poster.backdrop_path)}
        placeholder="blur"
        blurDataURL={TMDB_IMAGE(poster.backdrop_path)}
        priority
        width={0}
        height={0}
        sizes="100"
        style={{ width: "100%" }}
      />
    </div>
  )
}
