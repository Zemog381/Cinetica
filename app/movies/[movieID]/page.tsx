import { Movie } from '@/app/entities/Movie'
import { headers } from 'next/headers'
import { notFound } from 'next/navigation';

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
    return (
    <> 
    <div>ID : {movieID}</div>
    <p>{Number(movieID)}</p>
    <p>{JSON.stringify(mdm)}</p>
    </>
    );
  }