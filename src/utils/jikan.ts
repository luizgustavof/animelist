import axios, { AxiosResponse } from 'axios'
import { IRecomendation } from '../interfaces/jikan/IRecomendation'
import { IAnimeFullById } from '../interfaces/jikan/IAnimeFullById'

export const api = axios.create({ baseURL: 'https://api.jikan.moe/v4/' })

export const jikanApi = {
    async getRecentAnimeRecommendations() {
        const response = await api.get<AxiosResponse>('recommendations/anime')
            .then(e => e.data.data as IRecomendation[])
            .catch(() => [])

        return response
    },
    async getAnimeFullById(id: number) {
        const response = await api.get<AxiosResponse>(`anime/${id}/full`)
            .then(e => e.data.data as IAnimeFullById)
            .catch(() => null)

        return response
    }
}