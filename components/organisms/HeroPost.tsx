import type { FC } from 'react'

import HeroPostDescription from '@/molecules/HeroPostDescription'
import { BlogPost } from '@/interfaces/BlogPost'
import HeroWrapper from '@/organisms/HeroWrapper'

interface HeroPostProps {
    post: BlogPost
}

const HeroPost: FC<HeroPostProps> = async ({ post }) => {
    return (
        <div
            className={`desktop:h-[calc(100vh-72px)] h-[336px] desktop:px-sm pb-sm  bg-white`}
        >
            <HeroWrapper image={post.image ?? null}>
                <HeroPostDescription post={post} />
            </HeroWrapper>
        </div>
    )
}

export default HeroPost
