import { TVShowShort } from '@/app/entities/TVShow'
import { headers } from 'next/headers'
import { TVShowShortComponent } from '@/components/TVShowShortComponent';

interface TVSResponse {
    page : number,
    results : Array<TVShowShort>,
    total_pages : number,
    total_results : number
}

export default async function Page() {
    const headersList = headers();
    const rootUrl = headersList.get('host');
    const apiRes = (await fetch("http://"+rootUrl+"/api/shows/on-the-air",{method:"GET"}));
    const apiResJSON = await apiRes.json() as TVSResponse;
    const showList = apiResJSON.results;
    return (
    <> 
    <div>
        <p className="text-center">On the air</p>
        <div className="flex flex-row flex-wrap">
            {showList.map((s) => (<TVShowShortComponent key={s.id} tvshow={s}/>))}
        </div>
    </div>
    </>
    );
  }
