import type { FC } from 'react'
import React from 'react'

import Container from '@/atoms/Container'
import PostListItem from '@/molecules/PostListItem'
import { BlogPost } from '@/interfaces/BlogPost'

interface PostsListProps {
    posts: BlogPost[]
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
