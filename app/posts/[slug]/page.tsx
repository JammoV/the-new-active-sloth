import React from 'react'

import PostBody from '@/organisms/PostBody'
import { getBlogPostBySlug } from '@/client/contentful/BlogApi'
import { notFound } from 'next/navigation'
import HeroPost from '@/organisms/HeroPost'
import Container from '@/atoms/Container'
import TableOfContents from '@/molecules/TableOfContents'
import { extractBlogHeaders } from '@/utils/extractBlogHeaders'

export default async function Post({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const post = await getBlogPostBySlug(slug)

    if (!post || !post.body) {
        return notFound()
    }

    const contentHeadings = extractBlogHeaders(post.body)

    return (
        <article>
            <HeroPost post={post} />
            <Container>
                <div className="flex flex-row gap-xl">
                    <div className="w-[800px] flex flex-col gap-md">
                        <p className="my-md font-noto text-primary text-lg">
                            Geplaatst op 12 januari 2024
                        </p>
                        {post.intro && (
                            <>
                                <p className="text-xl leading-relaxed">
                                    {post.intro}
                                </p>
                                <hr className="border-primary-light my-md" />
                            </>
                        )}
                        <PostBody body={post.body} />
                    </div>
                    <div className="pt-lg flex-grow">
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
