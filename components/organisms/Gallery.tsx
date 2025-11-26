import type { FC } from 'react'

import ResponsiveImage from '@/atoms/ResponsiveImage'
import { BlogImage } from '@/interfaces/BlogPost'

const getGalleryDisplayType = (display: string): GalleryDisplay => {
    if (display.startsWith('Carousel (2 portrait')) {
        return GalleryDisplay.CAROUSEL
    }
    if (display.startsWith('Carousel (1 landscape')) {
        return GalleryDisplay.CAROUSEL_REVERSED
    }
    if (display.startsWith('Thumbnails')) {
        return GalleryDisplay.THUMBNAILS
    }
    if (display.startsWith('In-line')) {
        return GalleryDisplay.INLINE
    }
    return GalleryDisplay.LANDSCAPE
}

interface GalleryProps {
    images: BlogImage[]
    displayType: string
}

export enum GalleryDisplay {
    LANDSCAPE = 'landscape',
    INLINE = 'inline',
    CAROUSEL = 'carousel',
    CAROUSEL_REVERSED = 'carousel_reversed',
    THUMBNAILS = 'thumbnails',
}

const isLandscape = (image: BlogImage): boolean => {
    // @ts-ignore
    const width = image.image.fields.file?.details?.image?.width ?? 0
    // @ts-ignore
    const height = image.image.fields.file?.details?.image?.height ?? 0

    return width > height
}

const Gallery: FC<GalleryProps> = ({ images, displayType }) => {
    const display = getGalleryDisplayType(displayType)

    if (display === GalleryDisplay.INLINE) {
        return (
            <div className="flex flex-row gap-md">
                {images.map((image) => (
                    <div
                        className="relative w-[388px] aspect-3/4"
                        key={image.image.sys.id}
                    >
                        <ResponsiveImage
                            image={image}
                            sizes={`(max-width: 768px) 50vw, ${isLandscape(image) ? '776px' : '388px'}`}
                        />
                    </div>
                ))}
            </div>
        )
    }

    if (display === GalleryDisplay.LANDSCAPE) {
        return (
            <div className="flex flex-col gap-md">
                {images.map((image) => (
                    <div
                        className="relative w-full desktop:w-[800px] aspect-video"
                        key={image.image.sys.id}
                    >
                        <ResponsiveImage
                            image={image}
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>
                ))}
            </div>
        )
    }

    if (
        (display === GalleryDisplay.CAROUSEL ||
            display === GalleryDisplay.CAROUSEL_REVERSED) &&
        images.length === 3
    ) {
        return (
            <div
                className={`flex ${display === GalleryDisplay.CAROUSEL ? 'flex-col' : 'flex-col-reverse'} gap-md`}
            >
                <div className="flex flex-row gap-md">
                    {images.slice(0, 2).map((image) => (
                        <div
                            className="relative w-[388px] aspect-3/4"
                            key={image.image.sys.id}
                        >
                            <ResponsiveImage
                                image={image}
                                sizes={`(max-width: 768px) 50vw, ${isLandscape(image) ? '776px' : '388px'}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="relative w-full desktop:w-[800px] aspect-video">
                    <ResponsiveImage
                        image={images[2]}
                        sizes="(max-width: 768px) 100vw, 800px"
                    />
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap gap-md">
            {images.map((image) => {
                return (
                    <div
                        className="relative aspect-square w-[250px]"
                        key={image.image.sys.id}
                    >
                        <ResponsiveImage
                            image={image}
                            sizes="(max-width: 768px) 30vw, 250px"
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery
