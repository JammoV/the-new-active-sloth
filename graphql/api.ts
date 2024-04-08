import client from '@/graphql/client'
import { IPost } from '@/graphql/entities/Post'
import PostsQuery, { PostsQueryResult } from '@/graphql/queries/PostsQuery'
import PostQuery from '@/graphql/queries/PostQuery'
import postMapper from '@/graphql/mappers/postMapper'
import { ICategory } from '@/graphql/entities/Category'
import CategoriesQuery, {
    CategoriesQueryResult,
} from '@/graphql/queries/CategoriesQuery'
import injectWysiwygNodes from '@/graphql/utils/injectWysiwygNodes'
import categoryMapper from '@/graphql/mappers/categoryMapper'
import FeaturedPostQuery from '@/graphql/queries/FeaturedPostQuery'
import StaticPathsQuery, {
    StaticPathsQueryResult,
} from '@/graphql/queries/StaticPathsQuery'

export const getPosts = async (): Promise<IPost[]> => {
    const posts = await client.query<PostsQueryResult>(PostsQuery)

    if (!posts || posts.posts.length === 0) return []

    return posts.posts.map((post) => postMapper(post))
}

export const getStaticPaths = async (): Promise<{ slug: string }[]> => {
    const paths = await client.query<StaticPathsQueryResult>(StaticPathsQuery)

    if (!paths || paths.posts.length === 0) return []

    return paths.posts
}

export const getPostBySlug = async (
    slug: string
): Promise<IPost | undefined> => {
    const posts = await client.query<PostsQueryResult>(PostQuery, {
        slug: slug,
    })

    if (!posts || posts.posts.length === 0) return undefined

    const post = posts.posts.pop()

    if (!post) return undefined

    if (post.wysiwyg_nodes && post.body) {
        post.body = injectWysiwygNodes(post.wysiwyg_nodes, post.body)
        delete post['wysiwyg_nodes']
    }

    return postMapper(post)
}

export const getFeaturedPost = async (): Promise<IPost | undefined> => {
    const posts = await client.query<PostsQueryResult>(FeaturedPostQuery)

    if (!posts || posts.posts.length === 0) return undefined

    const post = posts.posts.pop()

    if (!post) return undefined

    return postMapper(post)
}

export const getCategories = async (): Promise<ICategory[]> => {
    const categories =
        await client.query<CategoriesQueryResult>(CategoriesQuery)

    if (!categories || categories.posts_categories.length === 0) return []

    return categories.posts_categories.map((category) =>
        categoryMapper(category)
    )
}
