import { NextResponse } from "next/server";

export async function GET(){
    const dotenv = require('dotenv').config();
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.KEY_API
        }
    };
    const response = await fetch (url,options);
    const data = await response.json();
    return NextResponse.json(data);
}
