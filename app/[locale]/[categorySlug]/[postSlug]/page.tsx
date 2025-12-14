import React from 'react'

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
import { draftMode } from 'next/headers'
import { getContentFullLocale } from '@/utils/locales'
import { hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string, postSlug: string }>
}): Promise<Metadata> {
    const { locale, postSlug } = await params
    const contentfulLocale = getContentFullLocale(locale)

    const post = await getBlogPostBySlug(contentfulLocale, postSlug)

    if (!post?.id) return notFound()

    return {
        title: `${post.title} | The Active Sloth`,
        description: post.seoDescription || post.intro,
    }
}

export default async function Post({
    params,
}: {
    params: Promise<{ locale: string, postSlug: string; }>
}) {
    const { locale, postSlug } = await params

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    // Enable static rendering
    setRequestLocale(locale)

    const { isEnabled } = await draftMode()
    const contentfulLocale = getContentFullLocale(locale)

    const post = await getBlogPostBySlug(contentfulLocale, postSlug, isEnabled)

    if (!post?.id) return notFound()

    return (
        <>
            <Header />
            <article>
                <HeroPost post={post} />
                <Container>
                    <div className="flex flex-col desktop:flex-row gap-md desktop:gap-xl">
                        <div className="desktop:w-[800px] flex flex-col gap-md">
                            <PostArticleWrapper post={post} />
                        </div>
                        <div className="flex flex-col grow gap-lg pt-md desktop:border-t-0 desktop:pt-lg border-t border-t-primary-light">
                            <PostSidebarWrapper locale={contentfulLocale} post={post} />
                        </div>
                    </div>
                </Container>
            </article>
        </>
    )
}

export async function generateStaticParams(): Promise<{ locale: string, slug: string }[]> {
    return await getDynamicBlogSlugs()
}
