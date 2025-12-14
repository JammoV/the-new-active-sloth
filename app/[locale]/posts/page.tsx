import Container from '@/atoms/Container'
import { getBlogPosts } from '@/client/contentful/BlogApi'

import PostTile from '@/molecules/PostTile'
import React from 'react'
import Header from '@/organisms/Header'
import { getContentFullLocale } from '@/utils/locales'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
    const t = await getTranslations('Metadata')
    return {
        title: t('posts-title'),
        description: t('posts-description'),
    }
}

export default async function PostsPage({ params }: PageProps<'/[locale]'>) {
    const { locale } = await params
    const contentfulLocale = getContentFullLocale(locale)
    const posts = await getBlogPosts(contentfulLocale)
    return (
        <Container>
            <Header withBorder />
            <div className="mt-md">
                <h2 className={`text-2xl font-noto mb-md`}>Alle artikelen</h2>
                <div className="grid gap-sm grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
                    {posts.map((post) => (
                        <PostTile key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </Container>
    )
}
