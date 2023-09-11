import { EndPointList } from "../Resources/EndPointList"
import { GET } from "./WebApi"


export const GetFilms = async () => {
    let response = await GET({
        url: EndPointList.movie,
        params: {
            "limit": '10'
        }
    });
    return response.data?.docs;
}

export const GetSerials = async () => {
    let response = await GET({
        url: EndPointList.movie,
        params: {
            "limit": '10',
            "type": 'anime'
        }
    })
    return response.data?.docs;
}