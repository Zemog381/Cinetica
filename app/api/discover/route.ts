import { NextResponse } from "next/server";

export async function GET(){
    const urlmovie = 'https://api.themoviedb.org/3/discover/movie?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.KEY_API
        }
    };
    
    const urlshow = 'https://api.themoviedb.org/3/discover/tv?language=en-US&page=1';
    
    const responsemovie = await fetch (urlmovie,options);
    const datamovie = await responsemovie.json();
    
    const responseshow = await fetch (urlshow,options);
    const datashow = await responseshow.json();

    const doubledata = {
        movies: datamovie,
        shows: datashow
    }
    return NextResponse.json(doubledata);
}