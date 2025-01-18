import Container from '@/atoms/Container'
import {
    getBlogCategoryBySlug,
    getBlogPostsByCategoryId,
} from '@/client/contentful/BlogApi'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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

    const posts = await getBlogPostsByCategoryId(category.id)

    return (
        <Container>
            <div className="flex flex-row gap-8 my-4">
                <ul>
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link href={`/${categorySlug}/${post.slug}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}
