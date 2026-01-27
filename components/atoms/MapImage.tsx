'use client'

import type { FC } from 'react'

import Image from 'next/image'
import { BlogImage } from '@/interfaces/BlogPost'
import { contentfulImageLoader } from '@/utils/imageLoader'

interface ResponsiveImageProps {
    image: BlogImage
}

const MapImage: FC<ResponsiveImageProps> = ({
    image
}) => {
    if (!image.image.fields?.file?.url) {
        return (
            <div className="w-full h-full bg-gray-200 flex justify-center items-center">
                <span className="text-sm">
                    Oeps! Afbeelding niet beschikbaar
                </span>
            </div>
        )
    }

    return (
        <Image
            src={(image.image.fields?.file?.url as string) ?? ''}
            // @ts-ignore
            width={image.image.fields.file?.details?.image?.width ?? 800}
            // @ts-ignore
            height={image.image.fields.file?.details?.image?.height ?? 800}
            loader={contentfulImageLoader}
            alt={(image.image.fields?.title as string) || 'Travel map'}
            quality={100}
            sizes="(max-width: 768px) 100vw, 1000px"
        />
    )
}

export default MapImage
