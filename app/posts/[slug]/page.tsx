import React from 'react'

import { getPostBySlug, getStaticPaths } from '@/graphql/api'
import Container, { PageType } from '@/atoms/Container'
import Link from 'next/link'
import HeroPost from '@/organisms/HeroPost'
import PostBody from '@/organisms/PostBody'

export default async function Post({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug)

    if (!post) {
        return <></>
    }

    return (
        <>
            <HeroPost post={post} />
            <Container pageType={PageType.BLOGPOST}>
                <article>
                    <div className="my-12">
                        <PostBody body={post.body} />
                        <div className="text-center">
                            <Link
                                href={'/posts'}
                                className={`hover:cursor-pointer mt-4 text-lg border-b-4 border-b-sand hover:border-b-orange`}
                            >
                                Bekijk alle posts
                            </Link>
                        </div>
                    </div>
                </article>
            </Container>
        </>
    )
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return await getStaticPaths()
}
