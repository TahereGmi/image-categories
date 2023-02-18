export interface IVideoResult {
    result: IVideo[],
    loading: boolean,
    loaded: boolean,
    error: unknown | null
}

export interface IVideo {
    id: string,
    attributes: IVideoAttr
}

export interface IVideoAttr {
    title: string,
    preview_src: string,
    big_poster: string
}