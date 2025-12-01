import type { FC } from 'react'

import HeroPostDescription from '@/molecules/HeroPostDescription'
import { BlogPost } from '@/interfaces/BlogPost'
import HeroWrapper from '@/organisms/HeroWrapper'
import { draftMode } from 'next/headers'
import { getBlogPostBySlug } from '@/client/contentful/BlogApi'

interface HeroPostProps {
    postSlugPromise: Promise<string>
}

const HeroPost: FC<HeroPostProps> = async ({ postSlugPromise }) => {
    'use cache'

    const postSlug = await postSlugPromise

    const post = await getBlogPostBySlug(postSlug)

    if (!post) {
        return null
    }

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
