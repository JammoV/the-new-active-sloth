import Image from 'next/image'
import type { FC } from 'react'

import Container from '@/atoms/Container'
import HeroPostDescription from '@/molecules/HeroPostDescription'
import { BlogPost } from '@/interfaces/BlogPost'

interface HeroPostProps {
    post: BlogPost
}

const HeroPost: FC<HeroPostProps> = ({ post }) => {
    const imageUrl = post.image?.fields?.file?.url

    return (
        <div
            className={`relative mobile:h-[336px] desktop:h-[calc(100vh-72px)] bg-primary-light`}
        >
            {imageUrl && (
                <Image
                    src={'https:' + post.image?.fields?.file?.url}
                    className="z-0"
                    alt={post.title}
                    priority={true}
                    quality={70}
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                />
            )}

            <Container>
                <HeroPostDescription post={post} withLink={false} />
            </Container>
        </div>
    )
}

export default HeroPost
