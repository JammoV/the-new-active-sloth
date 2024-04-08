import Image from 'next/image'
import type { FC } from 'react'

import type { IPost } from '@/graphql/entities/Post'
import Container from '@/atoms/Container'
import HeroPostDescription from '@/molecules/HeroPostDescription'
import getImageUrl from '@/graphql/utils/getImageUrl'

interface HeroPostProps {
    post: IPost
    withLink?: boolean
}

const HeroPost: FC<HeroPostProps> = ({ post, withLink = false }) => {
    return (
        <div className={`max-w-[2400px] mx-auto relative`}>
            <Image
                src={getImageUrl(post.mainImage.id)}
                className="z-0"
                alt={post.title}
                priority={true}
                fill
                style={{
                    objectFit: 'cover',
                }}
            />
            <div className="bg-gradient-to-r from-black/50 to-black/20 w-full h-full absolute"></div>
            <Container>
                <HeroPostDescription post={post} withLink={withLink} />
            </Container>
        </div>
    )
}

export default HeroPost
