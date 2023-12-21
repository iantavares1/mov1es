import Image from "next/image"
import Link from "next/link"
import tmdbLogo from "../../public/tmdb-logo.svg"

export const Footer = () => {
  return (
    <footer className="flex h-[10dvh] w-screen justify-end bg-primary p-300">
      <div className="flex items-center gap-2">
        <span className="hidden text-sm sm:block">
          Este produto usa a API TMDB, mas não é endossado ou certificado pelo
          TMDB
        </span>

        <Link href={"https://www.themoviedb.org/"} target="blank">
          <Image
            width={0}
            height={0}
            className="w-12"
            src={tmdbLogo}
            alt="TMDB logo"
            priority
          />
        </Link>
      </div>
    </footer>
  )
}
