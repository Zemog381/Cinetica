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
      <div className="flex flex-col w-full">
  <div 
    className="flex w-full bg-no-repeat bg-cover relative h-[400px]" 
    style={{ backgroundImage: `url(${backdropUrl})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
    <div className="m-4 flex h-[300px] w-full max-w-4xl mx-auto bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg">
      <div 
        className="w-[185px] h-[278px] shrink-0 bg-no-repeat bg-cover rounded-l-lg" 
        style={{ backgroundImage: `url(${posterUrl})` }}
      ></div>
      <div className="ml-4 flex flex-col justify-center space-y-2 p-4 text-white">
        <h1 className="text-4xl font-bold">{mdm.title}</h1>
        <p className="text-xl italic">{mdm.tagline}</p>
        <p className="text-lg text-gray-300">{mdm.release_date}</p>
        <p className="text-base text-gray-200 leading-relaxed">{mdm.overview}</p>
      </div>
    </div>
  </div>
</div>
    );
  }