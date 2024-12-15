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
    return (
    <> 
    <div>ID : {showID}</div>
    <p>{JSON.stringify(sdm)}</p>
    </>
    );
  }