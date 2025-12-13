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
import { draftMode } from 'next/headers'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ postSlug: string }>
}): Promise<Metadata> {
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
    const { postSlug } = await params
    const { isEnabled } = await draftMode()

    const post = await getBlogPostBySlug(postSlug, isEnabled)

    if (!post?.id) return notFound()

    return (
        <>
            <Header />
            <article>
                <Suspense fallback={<HeroPostSkeleton />}>
                    <HeroPost post={post} />
                </Suspense>
                <Container>
                    <div className="flex flex-col desktop:flex-row gap-md desktop:gap-xl">
                        <div className="desktop:w-[800px] flex flex-col gap-md">
                            <PostArticleWrapper post={post} />
                        </div>
                        <div className="flex flex-col grow gap-lg pt-md desktop:border-t-0 desktop:pt-lg border-t border-t-primary-light">
                            <PostSidebarWrapper post={post} />
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
