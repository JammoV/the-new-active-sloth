import Image from 'next/image'
import type { FC, PropsWithChildren } from 'react'

import Container from '@/atoms/Container'
import { BlogImage } from '@/interfaces/BlogPost'

interface HeroWrapperProps extends PropsWithChildren {
    image: BlogImage | null
}

const HeroWrapper: FC<HeroWrapperProps> = async ({ image, children }) => {
    return (
        <div
            className={`relative bg-primary desktop:rounded-xl h-full w-full `}
        >
            {image && (
                <Image
                    src={'https:' + image.image.fields.file?.url}
                    className={`z-0 desktop:rounded-xl object-${image?.position}`}
                    alt={image.title ?? 'The Active Sloth'}
                    priority={true}
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                />
            )}
            <Container>{children}</Container>
        </div>
    )
}

export default HeroWrapper
