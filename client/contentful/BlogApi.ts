import client, { previewClient } from '@/client/contentful/Client'
import { BlogPost } from '@/interfaces/BlogPost'
import { mapBlogPost } from '@/client/mappers/PostMapper'
import { TypeBlog } from '@/client/contentful/types'

export const getBlogPostBySlug = async (
    slug: string,
    preview = false
): Promise<BlogPost | null> => {
    const apiClient = preview ? previewClient : client

    // @ts-ignore
    const response = await apiClient.getEntries<TypeBlog>({
        content_type: 'blog',
        limit: 1,
        'fields.slug': slug,
    })

    if (!response.items.length) {
        return null
    }

    return mapBlogPost(response.items[0] as TypeBlog)
}

export const getBlogPosts = async (limit = 30): Promise<BlogPost[]> => {
    // @ts-ignore
    const response = await client.getEntries<TypeBlog>({
        content_type: 'blog',
        select: [
            'fields.slug',
            'fields.title',
            'fields.image',
            'fields.featured',
            'fields.category',
        ],
        limit,
    })

    if (!response.items.length) {
        return []
    }

    return response.items.map((post) => mapBlogPost(post as TypeBlog))
}
