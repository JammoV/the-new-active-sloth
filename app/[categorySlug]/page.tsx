import Container from '@/atoms/Container'
import {
    getBlogCategoryBySlug,
    getBlogPostsByCategoryId,
} from '@/client/contentful/BlogApi'
import { notFound } from 'next/navigation'
import PostTile from '@/molecules/PostTile'

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ categorySlug: string }>
}) {
    const { categorySlug } = await params

    const category = await getBlogCategoryBySlug(categorySlug)

    if (!category) {
        notFound()
    }

    const posts = await getBlogPostsByCategoryId(category.id, 10)

    return (
        <Container>
            <div className="my-lg grid gap-sm grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 ">
                {posts.map((post) => (
                    <PostTile key={post.id} post={post} />
                ))}
            </div>
        </Container>
    )
}
