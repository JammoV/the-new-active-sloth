import React, { FC } from 'react'

import { extractBlogHeaders } from '@/utils/extractBlogHeaders'
import TableOfContents from '@/molecules/TableOfContents'
import PostSidebarTiles from '@/molecules/PostSidebarTiles'
import { BlogPost } from '@/interfaces/BlogPost'

interface PostSidebarWrapperProps {
    post: BlogPost
}

const PostSidebarWrapper: FC<PostSidebarWrapperProps> = async ({ post }) => {
    if (!post.body) {
        return null
    }

    const contentHeadings = extractBlogHeaders(post.body)

    return (
        <>
            <TableOfContents headers={contentHeadings} />
            <PostSidebarTiles postId={post.id} categoryId={post.category.id} />
        </>
    )
}

export default PostSidebarWrapper
