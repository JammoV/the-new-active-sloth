'use client'

import type { FC } from 'react'
import React, { useEffect, useState } from 'react'

import { Category } from '@/interfaces/Category'
import Container from '@/atoms/Container'
import CategoryFilter from '@/molecules/CategoryFilter'
import PostsList from '@/organisms/PostsList'
import { BlogPost } from '@/interfaces/BlogPost'

interface PostsWithFilterProps {
    posts: BlogPost[]
    categories: Category[]
}

const PostsWithFilter: FC<PostsWithFilterProps> = ({ posts, categories }) => {
    const [activePosts, setActivePosts] = useState<BlogPost[]>(posts)
    const [categoryFilter, setCategoryFilter] = useState<Category | null>(null)

    const handleCategoryFilterChange = (category: Category): void => {
        if (category.id === categoryFilter?.id) {
            setCategoryFilter(null)
        } else {
            setCategoryFilter(category)
        }
    }

    // useEffect(() => {
    //     if (categoryFilter) {
    //         const newPosts = posts.filter(
    //             (post) => post.category.id === categoryFilter.id
    //         )
    //         setActivePosts(newPosts)
    //     } else {
    //         setActivePosts(posts)
    //     }
    // }, [categoryFilter, posts])

    return (
        <>
            <Container>
                <div className="flex flex-col sm:flex-row justify-between items-center border-b border-b-gray-200 pb-4 gap-2 my-4">
                    <CategoryFilter
                        categories={categories}
                        activeCategory={categoryFilter}
                        clickHandler={handleCategoryFilterChange}
                    />
                </div>
            </Container>

            <PostsList posts={activePosts} />
        </>
    )
}

export default PostsWithFilter
