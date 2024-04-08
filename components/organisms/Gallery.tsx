import Image from 'next/image'
import type { FC } from 'react'
import { ContentTypeGallery } from '@/graphql/entities/Post'
import getImageUrl from '@/graphql/utils/getImageUrl'

const imageHeight = 400
const imageWidth = 450
const imageLandscapeWidth = 900

const getImageWidth = (length: number, index: number): number => {
    if (length % 2 == 0) {
        return imageWidth
    }

    if (length === 1) {
        return imageLandscapeWidth
    }

    if ([2, 4, 6, 8].includes(index)) {
        return imageLandscapeWidth
    }

    return imageWidth
}

const getImageClass = (width: number, index: number): string => {
    if (width === imageLandscapeWidth) {
        return 'flex-2'
    }

    if ([0, 3, 5].includes(index)) {
        return 'flex-1 mr-2 mb-4'
    }

    if ([1, 4, 6].includes(index)) {
        return 'flex-1 ml-2 mb-4'
    }

    return 'flex-1 m-2'
}

const getGalleryClass = (display: GalleryDisplay): string => {
    switch (display) {
        case GalleryDisplay.THUMBNAILS:
            return 'flex flex-wrap my-4'
        case GalleryDisplay.INLINE:
            return 'flex flex-row my-4'
        case GalleryDisplay.LANDSCAPE:
        default:
            return 'flex flex-col my-4'
    }
}

interface GalleryProps {
    gallery: ContentTypeGallery
}

export enum GalleryDisplay {
    LANDSCAPE = 'landscape',
    INLINE = 'inline',
    CAROUSEL = 'carousel',
    THUMBNAILS = 'thumbnails',
}

const Gallery: FC<GalleryProps> = ({ gallery }) => {
    const imagesLength = gallery.items.length
    const display = gallery.display
    const images = gallery.items

    if (gallery.display === GalleryDisplay.INLINE && images.length < 5) {
        const imageWidth = imageLandscapeWidth / images.length

        return (
            <div className={getGalleryClass(display as GalleryDisplay)}>
                {images.map((image) => (
                    <div className="mx-2 first:ml-0 last:mr-0" key={image.id}>
                        <Image
                            alt={image.title || ''}
                            width={imageWidth}
                            height={550}
                            quality={100}
                            src={getImageUrl(image.id, {
                                width: imageWidth.toString(),
                                height: '550',
                            })}
                        />
                    </div>
                ))}
            </div>
        )
    }

    if (display === GalleryDisplay.LANDSCAPE) {
        const imageWidth = imageLandscapeWidth

        return (
            <div className={getGalleryClass(display)}>
                {images.map((image) => (
                    <div className="my-2 first:mt-0 last:mb-0" key={image.id}>
                        <Image
                            alt={image.title || ''}
                            width={imageWidth}
                            height={550}
                            quality={100}
                            src={getImageUrl(image.id, {
                                width: imageWidth.toString(),
                                height: '550',
                            })}
                        />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className={getGalleryClass(GalleryDisplay.THUMBNAILS)}>
            {images.map((image, index) => {
                const imageWidth = getImageWidth(imagesLength, index)
                const flexClass = getImageClass(imageWidth, index)

                return (
                    <div className={flexClass} key={image.id}>
                        <Image
                            alt={image.title || ''}
                            width={imageWidth}
                            height={550}
                            quality={100}
                            src={getImageUrl(image.id, {
                                width: imageWidth.toString(),
                                height: '550',
                            })}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery
