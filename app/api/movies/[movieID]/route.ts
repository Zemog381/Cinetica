import { NextRequest,NextResponse } from "next/server";

export async function GET(req : NextRequest){
    const movieID = req.nextUrl.pathname.replace('/api/movies/','');
    const url = 'https://api.themoviedb.org/3/movie/' + movieID;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.KEY_API
        }
    };
    const response = await fetch (url,options);
    const data = await response.json();

    if (response.ok)
        return NextResponse.json(data);
    else
        return NextResponse.json(data,{status:404});
}