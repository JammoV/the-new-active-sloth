import Container from '@/atoms/Container'
import {
    getBlogCategoryBySlug,
    getBlogPostsByCategoryId,
    getStaticParams,
} from '@/client/contentful/BlogApi'
import { notFound } from 'next/navigation'
import PostTile from '@/molecules/PostTile'
import React from 'react'
import Header from '@/organisms/Header'

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ categorySlug: string }>
}) {
    const { categorySlug } = await params

    const category = await getBlogCategoryBySlug(categorySlug)

    if (!category) {
        notFound()
    }

    const posts = await getBlogPostsByCategoryId(category.id, 30)

    return (
        <Container>
            <Header activeCategory={category.name} withBorder />
            <div className="mt-md">
                <h2 className={`text-2xl font-noto mb-md`}>
                    Artikelen over {category.name}
                </h2>
                <div className="grid gap-sm grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 ">
                    {posts.map((post) => (
                        <PostTile key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return [
        {
            slug: '/azie',
        },
        {
            slug: '/midden-amerika',
        },
        {
            slug: '/europa',
        },
        {
            slug: '/overig',
        },
    ]
}
