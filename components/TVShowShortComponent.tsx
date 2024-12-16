'use client'

import { TVShowShort } from "@/app/entities/TVShow";
import { useRouter } from "next/navigation";

export const TVShowShortComponent = ({tvshow} : {tvshow : TVShowShort}) => {
    const posterUrl = "https://image.tmdb.org/t/p/w185" + tvshow.poster_path;
    const router = useRouter();
    return ( <>
    <div className="m-2 w-[185px] h-[278px] shrink-0 bg-no-repeat bg-cover" style={{backgroundImage:"url("+posterUrl+")"}} onClick={()=>router.push("/shows/"+tvshow.id)}>
    <div className="group relative w-[185px] h-[278px] hover:bg-gradient-to-b from-black from-15%">
    <p className="hidden group-hover:block text-center text-gray-300">{tvshow.name}</p>
    </div>
    </div>
    </>
    )
}