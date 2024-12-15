import { TVShowShort } from '@/app/entities/TVShow'
import { headers } from 'next/headers'

interface TVSResponse {
    page : Number,
    results : Array<TVShowShort>,
    total_pages : Number,
    total_results : Number
}

export default async function Page() {
    const headersList = headers();
    const rootUrl = headersList.get('host');
    const apiRes = (await fetch("http://"+rootUrl+"/api/shows/on-the-air",{method:"GET"}));
    const apiResJSON = await apiRes.json() as TVSResponse;
    const showList = apiResJSON.results;
    return (
    <> 
    <div>On the Air</div>
    <p>Show 1 ; {JSON.stringify(showList[1])}</p>
    <p>Data : {JSON.stringify(apiResJSON)}</p>
    </>
    );
  }
