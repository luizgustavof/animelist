export interface IImages  {
    jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
    },
    webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
    }
}


interface IEntry {
    mal_id: string;
    url: string;
    images: IImages;
    title: string;
}

export interface IRecomendation {
    mal_id: string;
    entry: IEntry[];
    content: string;
    date: string;
}