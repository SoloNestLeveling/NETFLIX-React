export const API_KEY = "c07185f58c596976eca893c8b8b840ca";
export const BASE_HOST = "https://api.themoviedb.org/3";
export const IMAGE_HOST = "https://image.tmdb.org/t/p/"


export interface IResults {
    id: number,
    backdrop_path: string,
    poster_path: string,
    title: string,
    overview: string,
};


export interface IGetResults {
    dates: {
        maximum: string,
        minimum: string,
    },
    page: number,
    results: IResults[],
    total_pages: number,
    total_results: number
};



export const getNowPlaying = async () => {

    const res = await fetch(`${BASE_HOST}/movie/now_playing?language=ko&api_key=${API_KEY}`);
    const json = res.json();
    return json;
};


export const getImagePath = (id: string, size?: string) => {

    return `${IMAGE_HOST}/${size ? size : "original"}/${id}`
};






export interface IDetails {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null;
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}





export const getDetailByMovieId = async (id: string | undefined) => {

    const res = await fetch(`${BASE_HOST}/movie/${id}?language=ko&api_key=${API_KEY}`);
    const json = res.json()
    return json

};



export interface IProducer {
    cast:
    {
        id: number
        known_for_department: string,
        name: string,
        profile_path: string,
        job: string
        order: number
    }[],
    crew:
    {
        id: number
        known_for_department: string,
        name: string,
        profile_path: string,
        job: string
    }[]

}

export const getProducerAndActor = async (movieId: string | undefined) => {

    const res = await fetch(`${BASE_HOST}/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`)
    const json = res.json()
    return json;
};

//-----------------------------------------------------------------------------

export interface ITvResults {
    backdrop_path: string
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    poster_path: string
    vote_average: number
}

export interface ITopTv {
    results: ITvResults[],
    total_pages: number,
    total_results: number,

}


export interface IDetailsTv {

    genres: {
        id: number;
        name: string;
    }[],
    first_air_date: string,
    episode_run_time: number[],
    seasons: {
        air_date: string,
        episode_count: number,
        id: number,
        name: string,
    }[],
    overview: string,
    vote_average: number,
    number_of_episodes: number,
    number_of_seasons: number,
}




export const getTopTvShow = async () => {

    const res = await fetch(`${BASE_HOST}/tv/top_rated?language=ko&api_key=${API_KEY}`);
    const json = res.json();

    return json

}

export const getDetailByTvId = async (tvId: string | undefined) => {

    const res = await fetch(`${BASE_HOST}/tv/${tvId}?language=ko&api_key=${API_KEY}`);
    const json = res.json()

    return json

}


export interface ITvProducer {

    cast:
    {
        id: number
        known_for_department: string,
        name: string,
        profile_path: string,
        order: number
    }[],
    crew:
    {
        id: number
        known_for_department: string,
        name: string,
        profile_path: string,
        job: string
    }[]

};




export const getTvProducerAndActor = async (tvId: string | undefined) => {
    const res = await fetch(`${BASE_HOST}/tv/${tvId}/credits?language=en-US&api_key=${API_KEY}`)
    const json = res.json();
    return json;
};