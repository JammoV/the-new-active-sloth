import Container from '@/atoms/Container'
import {
    getBlogCategoryBySlug, getBlogPostsByCategoryId
} from '@/client/contentful/BlogApi'
import React from 'react'
import Header from '@/organisms/Header'
import CategoryPosts from '@/molecules/CategoryPosts'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ categorySlug: string }>
}) {
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
    const { categorySlug } = await params

    const category = await getBlogCategoryBySlug(categorySlug)

    if (!category) {
        return null
    }

    const posts = await getBlogPostsByCategoryId(category.id, 30)

    return (
        <Container>
            <Header withBorder />
            <div className="mt-md">
                <h2 className="text-xl desktop:text-2xl font-noto mb-md h-9">
                    Artikelen over {category.name}
                </h2>
                    <CategoryPosts posts={posts} />
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
