import React from 'react'

import PostBody from '@/organisms/PostBody'
import { getBlogPostBySlug } from '@/client/contentful/BlogApi'
import { notFound } from 'next/navigation'
import HeroPost from '@/organisms/HeroPost'
import Container from '@/atoms/Container'
import TableOfContents from '@/molecules/TableOfContents'
import { extractBlogHeaders } from '@/utils/extractBlogHeaders'
import { draftMode } from 'next/headers'
import MobileTableOfContents from '@/molecules/MobileTableOfContents'
import PostDates from '@/molecules/PostDates'
import PostSidebarTiles from '@/molecules/PostSidebarTiles'

export default async function Post({
    params,
}: {
    params: Promise<{ postSlug: string }>
}) {
    const { postSlug } = await params
    const { isEnabled } = await draftMode()

    const post = await getBlogPostBySlug(postSlug, isEnabled)

    if (!post || !post.body) {
        return notFound()
    }

    const contentHeadings = extractBlogHeaders(post.body)

    return (
        <article>
            <HeroPost post={post} />
            <Container>
                <div className="flex flex-col desktop:flex-row gap-md desktop:gap-xl">
                    <div className="desktop:w-[800px] flex flex-col gap-md">
                        <PostDates
                            publishedAt={post.publishedAt}
                            updatedAt={post.updatedAt}
                        />
                        {post.intro && (
                            <>
                                <p className="text-[18px] desktop:text-xl leading-relaxed">
                                    {post.intro}
                                </p>
                                <hr className="hidden desktop:block border-primary-light my-sm desktop:my-md" />
                            </>
                        )}
                        <MobileTableOfContents headers={contentHeadings} />
                        <PostBody body={post.body} />
                    </div>
                    <div className="flex flex-col flex-grow gap-lg pt-md desktop:border-t-0 desktop:pt-lg border-t border-t-primary-light">
                        <TableOfContents headers={contentHeadings} />
                        <PostSidebarTiles
                            postId={post.id}
                            categoryId={post.category.id}
                        />
                    </div>
                </div>
            </Container>
        </article>
    )
}

// export async function generateStaticParams(): Promise<{ slug: string }[]> {
//     return await getStaticPaths()
// }
