import React, { FC } from 'react'

import { getBlogCategoryBySlug } from '@/client/contentful/BlogApi'

interface CategoryPostsProps {
    categorySlugPromise: Promise<string>
}

const CategoryPageTitle: FC<CategoryPostsProps> = async ({ categorySlugPromise }) => {
    'use cache: remote'

    const categorySlug = await categorySlugPromise
    const category = await getBlogCategoryBySlug(categorySlug)

    if (!category) {
        return null
    }

    return (
        <h2 className="text-xl desktop:text-2xl font-noto mb-md h-9">
            Artikelen over {category.name}
        </h2>
    )
}

export default CategoryPageTitle
