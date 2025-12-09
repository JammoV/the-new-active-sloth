import React, { FC } from 'react'

import PostDates from '@/molecules/PostDates'
import MobileTableOfContents from '@/molecules/MobileTableOfContents'
import PostBody from '@/organisms/PostBody'
import { extractBlogHeaders } from '@/utils/extractBlogHeaders'
import { BlogPost } from '@/interfaces/BlogPost'

interface PostArticleWrapperProps {
    post: BlogPost
}

const PostArticleWrapper: FC<PostArticleWrapperProps> = async ({
    post,
}) => {
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
