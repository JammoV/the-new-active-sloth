import type { FC } from 'react'
import { Asset } from 'contentful'
import ResponsiveImage from '@/atoms/ResponsiveImage'

const getGalleryDisplayType = (display: string): GalleryDisplay => {
    if (display.startsWith('Carousel')) {
        return GalleryDisplay.CAROUSEL
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
    images: Asset[]
    displayType: GalleryDisplay
}

export enum GalleryDisplay {
    LANDSCAPE = 'landscape',
    INLINE = 'inline',
    CAROUSEL = 'carousel',
    THUMBNAILS = 'thumbnails',
}

const Gallery: FC<GalleryProps> = ({ images, displayType }) => {
    const display = getGalleryDisplayType(displayType)

    if (display === GalleryDisplay.INLINE) {
        return (
            <div className="flex flex-row gap-md">
                {images.map((image) => (
                    <div
                        className="relative w-[388px] aspect-[3/4]"
                        key={image.sys.id}
                    >
                        <ResponsiveImage image={image} />
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
                        className="relative w-[800px] aspect-video"
                        key={image.sys.id}
                    >
                        <ResponsiveImage image={image} />
                    </div>
                ))}
            </div>
        )
    }

    if (display === GalleryDisplay.CAROUSEL && images.length === 3) {
        return (
            <div className="flex flex-col gap-md">
                <div className="flex flex-row gap-md">
                    {images.slice(0, 2).map((image) => (
                        <div
                            className="relative w-[388px] aspect-[3/4]"
                            key={image.sys.id}
                        >
                            <ResponsiveImage image={image} />
                        </div>
                    ))}
                </div>
                <div className="relative w-[800px] aspect-video">
                    <ResponsiveImage image={images[2]} />
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap gap-md">
            {images.map((image, index) => {
                return (
                    <div
                        className="relative aspect-square w-[250px]"
                        key={image.sys.id}
                    >
                        <ResponsiveImage image={image} />
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery
