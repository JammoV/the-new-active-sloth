import { ReactElement } from 'react'
import { getBlogPosts } from '@/client/contentful/BlogApi'
import PostTile from '@/molecules/PostTile'

const HomepageRecentPosts = async (): Promise<ReactElement> => {
    const posts = await getBlogPosts()

    if (!posts) {
        return <></>
    }

    return (
        <div className="my-sm grid gap-sm grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 ">
            {posts.map((post) => (
                <PostTile key={post.id} post={post} />
            ))}
        </div>
    )
}

export default HomepageRecentPosts
