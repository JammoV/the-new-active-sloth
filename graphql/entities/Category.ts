import { ILocation } from '@/graphql/entities/Post'

export interface ICategory {
    id: string
    name: string
    location?: ILocation
    mapZoom: number
}

export interface CategoryRaw {
    id: string
    name: string
    location?: {
        coordinates: string[]
    }
    mapZoom: number
}
