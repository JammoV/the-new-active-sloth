import type { FC } from 'react'

import HeroPostDescription from '@/molecules/HeroPostDescription'
import { BlogPost } from '@/interfaces/BlogPost'
import HeroWrapper from '@/organisms/HeroWrapper'

interface HeroPostProps {
    post: BlogPost
}

const HeroPost: FC<HeroPostProps> = ({ post }) => {
    return (
        <HeroWrapper image={post.image ?? null}>
            <HeroPostDescription post={post} />
        </HeroWrapper>
    )
}

export default HeroPost
