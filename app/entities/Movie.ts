export interface Movie {
    adult : boolean,                                    // +18 ?
    backdrop_path : string,                             // Lien vers Image d'arriere-plan
    belongs_to_collection : Collection,                 // Collection de films
    budget : number,                                    // budget
    genres : Array<Genre>                               // Genres
    homepage : string,                                  // ????
    id : number,                                        // id
    imdb_id : string,                                   // id imdb
    origin_country : Array<string>                      // Liste des pays (2 caracteres)
    original_language : string,                         // Langue
    original_title : string,                            // Titre original
    overview : string,                                  // Synopsis
    popularity : number,                                // Popularite (jsp)
    poster_path : string,                               // Lien vers Image du Poster
    production_companies : Array<ProductionCompany>,    // 
    production_countries : Array<Country>,              //
    release_date : string,                              // Date de sortie
    revenue : number,                                   // en dollar
    runtime : number,                                   // Minutes
    spoken_languages : Array<Language>,                 // Langues
    status : string,                                    // "In Production" / "Released", jsp si y'en a d'autres
    tagline : string,                                   // "slogan"
    title : string,                                     // Titre
    video : boolean,                                    // hein?
    vote_average : number,                              // Note sur 10
    vote_count : number                                 // Nb de votes
}

export interface MovieShort {
    adult : boolean,
    backdrop_path : string,
    genre_ids : Array<number>,
    id : number,
    original_language : string,
    original_title : string,
    overview : string,
    popularity : string,
    poster_path : string,
    release_date : string,
    title : string,
    video : boolean,
    vote_average : number,
    vote_count : number
}

interface Genre {id : number, name : string}
interface ProductionCompany {id : number, logo_path : string, name : string, origin_country : string}
interface Country {iso_3166_1 : string, name : string}
interface Language {english_name : string, iso_639_1 : string, name : string}
interface Collection {id : number, name : string, poster_path : string; backdrop_path : string}