import React, { FC } from 'react'

import { getBlogCategoryBySlug, getBlogPostsByCategoryId } from '@/client/contentful/BlogApi'
import PostTile from '@/molecules/PostTile'

interface CategoryPostsProps {
    categorySlugPromise: Promise<string>
}

const CategoryPosts: FC<CategoryPostsProps> = async ({ categorySlugPromise }) => {
    'use cache: remote'

    const categorySlug = await categorySlugPromise
    const category = await getBlogCategoryBySlug(categorySlug)

    if (!category) {
        return null
    }

    const posts = await getBlogPostsByCategoryId(category.id, 30)

    return (
        <div className="grid gap-sm grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 ">
            {posts.map((post) => (
                <PostTile key={post.id} post={post} />
            ))}
        </div>
    )
}

export default CategoryPosts
