import { Movie } from '@/app/entities/Movie'
import { headers } from 'next/headers'
import { notFound } from 'next/navigation'

export default async function Page({
    params,
  }: {
    params: Promise<{ movieID: string }>
  }) {
    const headersList = headers();
    const rootUrl = headersList.get('host');
    const movieID = (await params).movieID;
    const movieDetails = (await fetch("http://"+rootUrl+"/api/movies/"+movieID,{method:"GET"}));
    if (!movieDetails.ok) return notFound(); // 404
    
    const mdm = await movieDetails.json() as Movie
    const backdropUrl = "https://image.tmdb.org/t/p/w1280" + mdm.backdrop_path;
    const posterUrl = "https://image.tmdb.org/t/p/w185" + mdm.poster_path;

    return (
      <div className="flex-col w-full">
        <div className="flex w-full bg-no-repeat bg-cover" style={{backgroundImage:"url("+backdropUrl+")"}}>
          <div className="m-2 h-[278px] w-full flex flex-row bg-white bg-opacity-30">
            <div className="w-[185px] h-[278px] shrink-0 bg-no-repeat bg-cover" style={{backgroundImage:"url("+posterUrl+")"}}></div>
             <div className="ml-2 flex-col">
              <p className="text-4xl">{mdm.title}</p>
              <p className="text-xl"><i>{mdm.tagline}</i></p>
              <p className="text-xl">{mdm.release_date}</p>
              <p className="text-lg">{mdm.overview}</p>
             </div>
          </div>
        </div>
        <div>
          a
        </div>
      </div>
    );
  }