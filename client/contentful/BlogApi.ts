import client, { previewClient } from '@/client/contentful/Client'
import { BlogImage, BlogPost } from '@/interfaces/BlogPost'
import { mapBlogPost } from '@/client/mappers/BlogPostMapper'
import {
    TypeBlog,
    TypeBlogCategory,
    TypeBlogImage,
} from '@/client/contentful/types'
import { mapBlogCategory } from '@/client/mappers/BlogCategoryMapper'
import { BlogCategory } from '@/interfaces/BlogCategory'
import { mapBlogImage } from '@/client/mappers/BlogImageMapper'

export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
    // @ts-ignore
    const response = await client.getEntry<TypeBlog>(id)

    if (!response) {
        return null
    }

    return mapBlogPost(response as TypeBlog)
}

export const getBlogPostBySlug = async (
    slug: string,
    preview = false
): Promise<BlogPost | null> => {
    const apiClient = preview ? previewClient : client

    // @ts-ignore
    const response = await apiClient.getEntries<TypeBlog>({
        content_type: 'blog',
        limit: 1,
        include: 3,
        'fields.slug': slug,
    })

    if (!response.items.length) {
        return null
    }

    return mapBlogPost(response.items[0] as TypeBlog)
}

export const getFeaturedBlogPost = async (): Promise<BlogPost | null> => {
    // @ts-ignore
    const response = await client.getEntries<TypeBlog>({
        content_type: 'blog',
        limit: 1,
        include: 2,
        order: '-fields.publishedAt',
        'fields.featured': true,
    })

    if (!response.items.length) {
        return null
    }

    return mapBlogPost(response.items[0] as TypeBlog)
}

export const getFeaturedBlogImage = async (): Promise<BlogImage | null> => {
    // @ts-ignore
    const response = await client.getEntries<TypeBlogImage>({
        content_type: 'blogImage',
        limit: 1,
        include: 2,
        'fields.featured': true,
    })

    if (!response.items.length) {
        return null
    }

    return mapBlogImage(response.items[0] as TypeBlogImage)
}

export const getDynamicBlogSlugs = async (
    limit = 30,
    skipFeatured = false
): Promise<{ slug: string }[]> => {
    // @ts-ignore
    const response = await client.getEntries<TypeBlog>({
        content_type: 'blog',
        select: ['fields.slug', 'fields.category'],
        order: '-fields.updatedAt',
        limit,
    })

    if (!response.items.length) {
        return []
    }

    return response.items.map((post) => {
        return {
            // @ts-ignore
            slug: `/${post.fields.category.fields.slug}/${post.fields.slug}`,
        }
    })
}

export const getBlogPosts = async (
    limit = 30,
    skipFeatured = false
): Promise<BlogPost[]> => {
    // @ts-ignore
    const response = await client.getEntries<TypeBlog>({
        content_type: 'blog',
        select: [
            'fields.slug',
            'fields.title',
            'fields.intro',
            'fields.publishedAt',
            'fields.blogImage',
            'fields.featured',
            'fields.category',
        ],
        'fields.featured[ne]': skipFeatured ? true : undefined,
        order: '-fields.publishedAt',
        limit,
    })

    if (!response.items.length) {
        return []
    }

    return response.items.map((post) => mapBlogPost(post as TypeBlog))
}

export const getBlogCategoryBySlug = async (
    slug: string,
    preview = false
): Promise<BlogCategory | null> => {
    const apiClient = preview ? previewClient : client

    // @ts-ignore
    const response = await apiClient.getEntries<TypeBlogCategory>({
        content_type: 'blogCategory',
        limit: 1,
        include: 3,
        'fields.slug': slug,
    })

    if (!response.items.length) {
        return null
    }

    return mapBlogCategory(response.items[0] as TypeBlogCategory)
}

export const getBlogPostsByCategoryId = async (
    categoryId: string,
    limit = 3,
    postIdToExclude?: string
): Promise<BlogPost[]> => {
    // @ts-ignore
    const response = await client.getEntries<TypeBlog>({
        content_type: 'blog',
        select: [
            'fields.slug',
            'fields.title',
            'fields.publishedAt',
            'fields.blogImage',
            'fields.featured',
            'fields.category',
        ],
        'fields.category.sys.id': categoryId,
        'sys.id[ne]': postIdToExclude,
        order: '-fields.publishedAt',
        limit,
    })

    if (!response.items.length) {
        return []
    }

    return response.items.map((post) => mapBlogPost(post as TypeBlog))
}
