import React, { FC } from 'react'
import Link from 'next/link'
import { getBlogPostsByCategoryId } from '@/client/contentful/BlogApi'
import PostTile from '@/molecules/PostTile'
import Heading from '@/atoms/Heading'

interface PostSidebarTilesProps {
    postId: string
    categoryId: string
}

const getRandomEntries = <T,>(arr: T[], num: number): T[] => {
    return arr.sort(() => Math.random() - 0.5).slice(0, num)
}

const PostSidebarTiles: FC<PostSidebarTilesProps> = async ({
    postId,
    categoryId,
}) => {
    const posts = await getBlogPostsByCategoryId(categoryId, 6, postId)

    if (posts.length === 0) {
        return <></>
    }

    const randomPosts = getRandomEntries(posts, 3)

    return (
        <div>
            <h3 className="text-xl font-noto mb-sm ">Bekijk ook</h3>
            <div className="flex flex-col gap-xs">
                {randomPosts.map((post) => (
                    <PostTile key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default PostSidebarTiles
