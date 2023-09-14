import { EndPointList } from "../Resources/EndPointList"
import { GET } from "./WebApi"

export interface IActorData {
    description: string,
    name: string,
    profession: string,
    photo: string,
    id: number
}

export type TFilmModel2 = {
    alternativeName: string,
    countries: any[],
    description: string,
    genres: any[],
    id: number,
    movieLength: number,
    name: string,
    poster: string,
    actors: IActorData[],
    rating: {
        imdb: number,
        kp: number,
    },
    type: string,
    year: number
}

export const GetFilms = async () => {
    let response = await GET({
        url: EndPointList.movie,
        params: {
            "limit": '6'
        }
    });
    return response.data?.docs;
}

export const GetSerials = async () => {
    let response = await GET({
        url: EndPointList.movie,
        params: {
            "limit": '6',
            "type": 'tv-series'
        }
    })
    return response.data?.docs;
}

export const GetAnime = async () => {
    let response = await GET({
        url: EndPointList.movie,
        params: {
            "limit": '6',
            "type": 'anime'
        }
    })
    return response.data?.docs;
}

export const GetFilmById = async (Id: number) => {
    let response = await GET({
        url: EndPointList.movie + `/${Id}`,
        params: {
            "limit": '6',
            "Id": Id
        }
    });
    //console.log('by id', response.data)
    return response.data;
}

export const GetPersonById = async (Id: number) => {
    let response = await GET({
        url: EndPointList.person + `/${Id}`,
        params: {
            "limit": '1',
            "Id": Id
        }
    });
    //console.log('by id2', response)
    //return response.data?.docs;
}