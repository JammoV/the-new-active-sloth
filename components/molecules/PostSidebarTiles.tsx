import React, { FC } from 'react'
import Link from 'next/link'
import { getBlogPostsByCategoryId } from '@/client/contentful/BlogApi'
import PostTile from '@/molecules/PostTile'
import Heading from '@/atoms/Heading'

interface PostSidebarTilesProps {
    postId: string
    categoryId: string
}

const PostSidebarTiles: FC<PostSidebarTilesProps> = async ({
    postId,
    categoryId,
}) => {
    const posts = await getBlogPostsByCategoryId(categoryId, 3, postId)

    if (posts.length === 0) {
        return <></>
    }

    return (
        <div>
            <h3 className="text-xl font-noto mb-sm ">Bekijk ook</h3>
            <div className="flex flex-col gap-xs">
                {posts.map((post) => (
                    <PostTile key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default PostSidebarTiles
