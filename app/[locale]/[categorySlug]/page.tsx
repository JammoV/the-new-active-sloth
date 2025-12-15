import Container from '@/atoms/Container'
import {
    getBlogCategoryBySlug,
    getBlogPostsByCategoryId,
} from '@/client/contentful/BlogApi'
import React from 'react'
import Header from '@/organisms/Header'
import CategoryPosts from '@/molecules/CategoryPosts'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; categorySlug: string }>
}) {
    const t = await getTranslations('Metadata')
    const { locale, categorySlug } = await params

    const category = await getBlogCategoryBySlug(locale, categorySlug)

    if (!category) return {}

    return {
        title: t('category-title', { category: category.name }),
        description: t('category-description', { category: category.name }),
    }
}

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ locale: string; categorySlug: string }>
}) {
    const { locale, categorySlug } = await params

    const t = await getTranslations({
        namespace: 'Generic',
        locale: locale,
    })

    const category = await getBlogCategoryBySlug(locale, categorySlug)

    if (!category) {
        return null
    }

    const posts = await getBlogPostsByCategoryId(
        locale,
        category.id,
        30
    )

    return (
        <Container>
            <Header withBorder />
            <div className="mt-md">
                <h2 className="text-xl desktop:text-2xl font-noto mb-md h-9">
                    {t('posts-about', { topic: category.name })}
                </h2>
                <CategoryPosts posts={posts} />
            </div>
        </Container>
    )
}

export async function generateStaticParams(): Promise<
    { locale: string; slug: string }[]
> {
    return [
        { locale: 'en-US', slug: '/asia' },
        { locale: 'en-US', slug: '/central-america' },
        { locale: 'en-US', slug: '/europe' },
        { locale: 'en-US', slug: '/other' },
        { locale: 'nl-NL', slug: '/azie' },
        { locale: 'nl-NL', slug: '/centraal-amerika' },
        { locale: 'nl-NL', slug: '/europa' },
        { locale: 'nl-NL', slug: '/overig' },
    ]
}