export const contentfulImageLoader = ({
    src,
    width,
    quality,
}: {
    src: string
    width: number
    quality?: number
}) => {
    const url = new URL(`https://${src}`)
    url.searchParams.set('fm', 'webp')
    url.searchParams.set('w', width.toString())
    url.searchParams.set('q', (quality || 75).toString())
    return url.href
}
