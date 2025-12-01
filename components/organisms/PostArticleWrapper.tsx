import React, { FC } from 'react'

import { getBlogPostBySlug } from '@/client/contentful/BlogApi'
import PostDates from '@/molecules/PostDates'
import MobileTableOfContents from '@/molecules/MobileTableOfContents'
import PostBody from '@/organisms/PostBody'
import { draftMode } from 'next/headers'
import { extractBlogHeaders } from '@/utils/extractBlogHeaders'

interface PostArticleWrapperProps {
    postSlugPromise: Promise<string>
}

const PostArticleWrapper: FC<PostArticleWrapperProps> = async ({
    postSlugPromise,
}) => {
    'use cache'

    const postSlug = await postSlugPromise

    const { isEnabled } = await draftMode()

    const post = await getBlogPostBySlug(postSlug, isEnabled)

    if (!post || !post.body) {
        return null
    }

    const contentHeadings = extractBlogHeaders(post.body)

    return (
        <>
            <PostDates
                publishedAt={post.publishedAt}
                updatedAt={post.updatedAt}
            />
            {post.intro && (
                <>
                    <p className="text-[18px] desktop:text-xl leading-relaxed">
                        {post.intro}
                    </p>
                    <hr className="hidden desktop:block border-secondary-light my-sm desktop:my-md" />
                </>
            )}
            <MobileTableOfContents headers={contentHeadings} />
            <PostBody body={post.body} />
        </>
    )
}

export default PostArticleWrapper
