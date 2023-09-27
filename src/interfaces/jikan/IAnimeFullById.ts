import { IImages } from "./IRecomendation";

interface ITrailer {
    youtube_id: string;
    url: string;
}

interface IGenres {
    mal_id: number,
    type: string,
    name: string,
    url: string;
}

export interface IAnimeFullById {
    images: IImages;
    trailer: ITrailer;
    title: string;
    status: string;
    duration: string;
    synopsis: string;
    genres: IGenres[];
    episodes: number;
    score: number;
    favorites: number;
    members: number;
}
