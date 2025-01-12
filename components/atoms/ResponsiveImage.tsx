import type { FC } from 'react'
import { Asset } from 'contentful'
import Image from 'next/image'

interface ResponsiveImageProps {
    image: Asset
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({ image }) => {
    if (!image.fields?.file?.url) {
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
            alt={(image.fields?.title as string) || ''}
            quality={100}
            fill
            style={{
                objectFit: 'cover',
            }}
            src={
                image.fields?.file?.url
                    ? (('https:' + image.fields?.file?.url) as string)
                    : ''
            }
        />
    )
}

export default ResponsiveImage
