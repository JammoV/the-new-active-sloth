import Container from '@/atoms/Container'
import { getBlogPosts } from '@/client/contentful/BlogApi'

import PostTile from '@/molecules/PostTile'
import React from 'react'
import Header from '@/organisms/Header'

export default async function PostsPage() {
    const posts = await getBlogPosts()

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
