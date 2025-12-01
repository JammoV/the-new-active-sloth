import React, { FC } from 'react'

import {
    getBlogCategoryBySlug,
    getBlogPostBySlug,
    getBlogPostsByCategoryId,
} from '@/client/contentful/BlogApi'
import PostTile from '@/molecules/PostTile'
import PostDates from '@/molecules/PostDates'
import MobileTableOfContents from '@/molecules/MobileTableOfContents'
import PostBody from '@/organisms/PostBody'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { extractBlogHeaders } from '@/utils/extractBlogHeaders'
import TableOfContents from '@/molecules/TableOfContents'
import PostSidebarTiles from '@/molecules/PostSidebarTiles'

interface PostSidebarWrapperProps {
    postSlugPromise: Promise<string>
}

const PostSidebarWrapper: FC<PostSidebarWrapperProps> = async ({
    postSlugPromise,
}) => {
    'use cache'

    const postSlug = await postSlugPromise

    const post = await getBlogPostBySlug(postSlug)

    if (!post || !post.body) {
        return null
    }

    const contentHeadings = extractBlogHeaders(post.body)

    return (
        <>
            <TableOfContents headers={contentHeadings} />
            <PostSidebarTiles
                postId={post.id}
                categoryId={post.category.id}
            />
        </>
    )
}

export default PostSidebarWrapper
