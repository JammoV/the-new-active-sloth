import PostTile from '@/molecules/PostTile'
import { getPosts } from '@/graphql/api'
import { ReactElement } from 'react'

const HomepageRecentPosts = async (): Promise<ReactElement> => {
    const posts = await getPosts()

    if (!posts) {
        return <></>
    }

    return (
        <div className="mt-4 mb-10">
            <div className="flex flex-col">
                {posts
                    .filter((p) => !p.showOnHome)
                    .slice(0, 3)
                    .map((post) => {
                        return <PostTile post={post} key={post.id} />
                    })}
            </div>
        </div>
    )
}

export default HomepageRecentPosts
