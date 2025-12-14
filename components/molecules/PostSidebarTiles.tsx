import React, { FC } from 'react'
import { getBlogPostsByCategoryId } from '@/client/contentful/BlogApi'
import PostTile from '@/molecules/PostTile'
import { getTranslations } from 'next-intl/server'

interface PostSidebarTilesProps {
    locale: string
    postId: string
    categoryId: string
}

const getRandomEntries = <T,>(arr: T[], num: number): T[] => {
    return arr.sort(() => Math.random() - 0.5).slice(0, num)
}

const PostSidebarTiles: FC<PostSidebarTilesProps> = async ({
    locale,
    postId,
    categoryId,
}) => {
    const t = await getTranslations('Post')

    const posts = await getBlogPostsByCategoryId(locale, categoryId, 6, postId)

    if (posts.length === 0) {
        return <></>
    }

    const randomPosts = getRandomEntries(posts, 3)

    return (
        <div>
            <h3 className="text-xl font-noto mb-sm ">{t('also-see')}</h3>
            <div className="flex flex-col gap-xs">
                {randomPosts.map((post) => (
                    <PostTile key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default PostSidebarTiles
