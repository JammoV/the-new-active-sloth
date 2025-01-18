import type { FC } from 'react'

import Image from 'next/image'
import { BlogImage } from '@/interfaces/BlogPost'
import { cn } from '@/utils/cn'

interface ResponsiveImageProps {
    image: BlogImage
    className?: string
    sizes?: string
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({
    image,
    className,
    sizes,
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
            alt={(image.image.fields?.title as string) || ''}
            quality={100}
            fill
            style={{
                objectFit: 'cover',
            }}
            className={cn(`object-${image.position}`, className)}
            sizes={sizes}
            src={
                image.image.fields?.file?.url
                    ? (('https:' + image.image.fields?.file?.url) as string)
                    : ''
            }
        />
    )
}

export default ResponsiveImage
