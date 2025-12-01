import Container from '@/atoms/Container'
import { getBlogPosts } from '@/client/contentful/BlogApi'

import PostTile from '@/molecules/PostTile'
import React, { FC, Suspense } from 'react'
import Header from '@/organisms/Header'

export function generateMetadata() {
    return {
        title: `Overzicht van alle reisartikelen | The Active Sloth`,
        description: `Reis, relax repeat! De leukste reisartikelen vind je op The Active Sloth`,
    }
}

const AllBlogPosts: FC = async () => {
    'use cache'

    const posts = await getBlogPosts()

    return (
        <div className="grid gap-sm grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
            {posts.map((post) => (
                <PostTile key={post.id} post={post} />
            ))}
        </div>
    )
}

export default async function PostsPage() {
    return (
        <Container>
            <Header withBorder />
            <div className="mt-md">
                <h2 className={`text-2xl font-noto mb-md`}>Alle artikelen</h2>
                <Suspense>
                    <AllBlogPosts />
                </Suspense>
            </div>
        </Container>
    )
}
