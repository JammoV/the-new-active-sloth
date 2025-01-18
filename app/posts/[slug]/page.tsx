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

export default async function Post({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const { isEnabled } = await draftMode()
    const post = await getBlogPostBySlug(slug, isEnabled)

    if (!post || !post.body) {
        return notFound()
    }

    const contentHeadings = extractBlogHeaders(post.body)

    return (
        <article>
            <HeroPost post={post} />
            <Container>
                <div className="flex flex-col desktop:flex-row gap-xl">
                    <div className="desktop:w-[800px] flex flex-col gap-md">
                        <p className="my-sm desktop:my-md font-noto text-sm desktop:text-primary text-lg">
                            Geplaatst op 12 januari 2024
                        </p>
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
                    <div className="hidden desktop:pt-lg desktop:flex-grow desktop:block">
                        <TableOfContents headers={contentHeadings} />
                    </div>
                </div>
            </Container>
        </article>
    )
}

// export async function generateStaticParams(): Promise<{ slug: string }[]> {
//     return await getStaticPaths()
// }
