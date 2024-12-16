import { TVShow } from '@/app/entities/TVShow'
import { headers } from 'next/headers'
import { notFound } from 'next/navigation';

export default async function Page({
    params,
  }: {
    params: Promise<{ showID: string }>
  }) {
    const headersList = headers();
    const rootUrl = headersList.get('host');
    const showID = (await params).showID;
    const showDetails = (await fetch("http://"+rootUrl+"/api/shows/"+showID,{method:"GET"}));
    if (!showDetails.ok) return notFound(); // 404
    
    const sdm = await showDetails.json() as TVShow
    const backdropUrl = "https://image.tmdb.org/t/p/w1280" + sdm.backdrop_path;
    const posterUrl = "https://image.tmdb.org/t/p/w185" + sdm.poster_path;

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
        <h1 className="text-4xl font-bold">{sdm.name}</h1>
        <p className="text-xl italic">{sdm.tagline}</p>
        <p className="text-lg text-gray-300">{sdm.first_air_date} / {sdm.last_air_date}</p>
        <p className="text-base text-gray-200 leading-relaxed">{sdm.overview}</p>
      </div>
    </div>
  </div>
</div>
    );
  }