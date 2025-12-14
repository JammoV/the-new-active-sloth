import Container from '@/atoms/Container'
import {
    getBlogCategoryBySlug,
    getBlogPostsByCategoryId,
} from '@/client/contentful/BlogApi'
import React from 'react'
import Header from '@/organisms/Header'
import CategoryPosts from '@/molecules/CategoryPosts'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

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
    const t = await getTranslations('Generic')
    const { locale, categorySlug } = await params

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    // Enable static rendering
    setRequestLocale(locale)

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
        { locale: 'en', slug: 'asia' },
        { locale: 'en', slug: 'central-america' },
        { locale: 'en', slug: 'europe' },
        { locale: 'en', slug: 'other' },
        { locale: 'nl', slug: 'azie' },
        { locale: 'nl', slug: 'centraal-amerika' },
        { locale: 'nl', slug: 'europa' },
        { locale: 'nl', slug: 'overig' },
    ]
}
