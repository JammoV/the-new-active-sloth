import querystring from 'querystring'

type ImageParams = {
    quality?: string
    width?: string
    height?: string
}

export const getImageUrl = (
    identifier: string,
    params?: ImageParams
): string => {
    if (params) {
        return `/api/asset/${identifier}?${querystring.stringify(params)}`
    }

    return `/api/asset/${identifier}`
}

export default getImageUrl
