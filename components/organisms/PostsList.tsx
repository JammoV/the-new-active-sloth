import type { FC } from 'react'
import React from 'react'

import { IPost } from '@/graphql/entities/Post'
import Container from '@/atoms/Container'
import PostListItem from '@/molecules/PostListItem'

interface PostsListProps {
    posts: IPost[]
}

const PostsList: FC<PostsListProps> = ({ posts }) => {
    return (
        <Container>
            {posts.map((post, index) => (
                <PostListItem post={post} key={post.id} index={index} />
            ))}
        </Container>
    )
}

export default PostsList
