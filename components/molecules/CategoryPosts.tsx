import React, { FC } from 'react'

import PostTile from '@/molecules/PostTile'
import { BlogPost } from '@/interfaces/BlogPost'

interface CategoryPostsProps {
    posts: BlogPost[]
}

const CategoryPosts: FC<CategoryPostsProps> = async ({ posts }) => {
    return (
        <div className="grid gap-sm grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 ">
            {posts.map((post) => (
                <PostTile key={post.id} post={post} />
            ))}
        </div>
    )
}

export default CategoryPosts
