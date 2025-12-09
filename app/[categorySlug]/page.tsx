import Container from '@/atoms/Container'
import {
    getBlogCategoryBySlug
} from '@/client/contentful/BlogApi'
import React, { Suspense } from 'react'
import Header from '@/organisms/Header'
import CategoryPosts from '@/molecules/CategoryPosts'
import CategoryPageTitle from '@/atoms/CategoryPageTitle'
import PostsSkeleton from '@/skeletons/PostsSkeleton'
import { cacheLife } from 'next/cache'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ categorySlug: string }>
}) {
    'use cache'

    const { categorySlug } = await params

    const category = await getBlogCategoryBySlug(categorySlug)

    if (!category) return {}

    return {
        title: `Reis artikelen over ${category.name} | The Active Sloth`,
        description: `Reis, relax repeat! De leukste reisartikelen over ${category.name} vind je op The Active Sloth`,
    }
}

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ categorySlug: string }>
}) {
    'use cache'

    cacheLife('days')

    const categorySlugPromise = params.then(pms => pms.categorySlug)

    return (
        <Container>
            <Header withBorder />
            <div className="mt-md">
                <Suspense fallback={<span className="animate-pulse block rounded-xl bg-gray-100 w-64 h-9 mb-md"></span>}>
                    <CategoryPageTitle categorySlugPromise={categorySlugPromise} />
                </Suspense>
                <Suspense fallback={<PostsSkeleton />}>
                    <CategoryPosts categorySlugPromise={categorySlugPromise} />
                </Suspense>
            </div>
        </Container>
    )
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return [
        {
            slug: 'azie',
        },
        {
            slug: 'midden-amerika',
        },
        {
            slug: 'europa',
        },
        {
            slug: 'overig',
        },
    ]
}
