import { UrlBody, token } from "../Resources/EndPointList"
import axios, {AxiosHeaders, AxiosRequestHeaders, AxiosRequestConfig, AxiosHeaderValue} from "axios"

type THeaders =  {(key: string) : string | number}

interface IFetchTypes {
    url: string,
    headers?: any,
    params?: any,
    method?: string
}

export const ExecuteFetch = async ({ url, headers, method, params }: IFetchTypes) => {
    let t = await axios({
        url: UrlBody + url ,
        method: method,
        headers: {
            "X-API-KEY" : token
        },
        params: params
    })
    return t;
}

export const POST = () => {

}

export const GET = async ({ url, headers, params }: { url: string, headers?: object, params: object  }) => {
    return await ExecuteFetch({
        url: url,
        headers: headers,
        method: 'GET',
        params: params
    })
}