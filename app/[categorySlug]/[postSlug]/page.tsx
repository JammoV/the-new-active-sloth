import React, { Suspense } from 'react'

import {
    getBlogPostBySlug,
    getDynamicBlogSlugs,
} from '@/client/contentful/BlogApi'
import HeroPost from '@/organisms/HeroPost'
import Container from '@/atoms/Container'
import Header from '@/organisms/Header'
import PostArticleWrapper from '@/organisms/PostArticleWrapper'
import PostSidebarWrapper from '@/organisms/PostSidebarWrapper'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import HeroPostSkeleton from '@/skeletons/HeroPostSkeleton'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ postSlug: string }>
}): Promise<Metadata> {
    'use cache'

    const { postSlug } = await params

    const post = await getBlogPostBySlug(postSlug)

    if (!post?.id) return notFound()

    return {
        title: `${post.title} | The Active Sloth`,
        description: post.seoDescription || post.intro,
    }
}

export default async function Post({
    params,
}: {
    params: Promise<{ postSlug: string; categorySlug: string }>
}) {
    const postSlugPromise = params.then((pms) => pms.postSlug)

    return (
        <>
            <Header />
            <article>
                <Suspense fallback={<HeroPostSkeleton />}>
                    <HeroPost postSlugPromise={postSlugPromise} />
                </Suspense>
                <Container>
                    <div className="flex flex-col desktop:flex-row gap-md desktop:gap-xl">
                        <div className="desktop:w-[800px] flex flex-col gap-md">
                            <Suspense
                                fallback={'<div>Loading article...</div>'}
                            >
                                <PostArticleWrapper
                                    postSlugPromise={postSlugPromise}
                                />
                            </Suspense>
                        </div>
                        <div className="flex flex-col grow gap-lg pt-md desktop:border-t-0 desktop:pt-lg border-t border-t-primary-light">
                            <Suspense
                                fallback={'<div>Loading sidebar...</div>'}
                            >
                                <PostSidebarWrapper
                                    postSlugPromise={postSlugPromise}
                                />
                            </Suspense>
                        </div>
                    </div>
                </Container>
            </article>
        </>
    )
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return await getDynamicBlogSlugs()
}
