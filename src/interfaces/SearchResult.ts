import { ApolloError } from '@apollo/client'

export interface IResponse {
    data: IListOfAnime,
    loading: boolean,
    error: ApolloError | undefined
}

export interface IListOfAnime {
    Page: IPage
}

export interface IPage {
    pageInfo: IPageInfo
    media: IAnime[]
}

export interface IPageInfo {
    currentPage: number
    hasNextPage: boolean
    perPage: number
}

export interface IAnime {
    id: number
    title: IAnimeTitle
    coverImage: ICoverImage
}

export interface IAnimeTitle {
    english: string
    native: string
}

export interface ICoverImage {
    extraLarge: string
}
