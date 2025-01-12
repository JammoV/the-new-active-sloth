import { ReactElement } from 'react'
import { getBlogPosts } from '@/client/contentful/BlogApi'
import Link from 'next/link'

const HomepageRecentPosts = async (): Promise<ReactElement> => {
    const posts = await getBlogPosts()

    if (!posts) {
        return <></>
    }

    return (
        <div className="flex flex-row gap-8 my-4">
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomepageRecentPosts
