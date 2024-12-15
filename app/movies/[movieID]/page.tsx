import { Movie } from '@/app/entities/Movie'
import { headers } from 'next/headers'

export default async function Page({
    params,
  }: {
    params: Promise<{ movieID: string }>
  }) {
    const headersList = headers();
    const rootUrl = headersList.get('host');
    const movieID = (await params).movieID;
    const movieDetails = (await fetch("http://"+rootUrl+"/api/movies/"+movieID,{method:"GET"}));
    const mdm = await movieDetails.json() as Movie
    return (
    <> 
    <div>ID : {movieID}</div>
    <p>Data : {JSON.stringify(mdm)}</p>
    </>
    );
  }