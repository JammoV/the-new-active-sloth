import { BlogPost } from '@/interfaces/BlogPost'
import { Document } from '@contentful/rich-text-types'

import {
    TypeBlog,
    TypeBlogFields,
    TypeBlogImageFields,
} from '@/client/contentful/types'
import { mapBlogCategory } from '@/client/mappers/BlogCategoryMapper'
import { mapBlogImage } from '@/client/mappers/BlogImageMapper'

export const mapBlogPost = (post: TypeBlog): BlogPost => {
    const fields = post.fields as TypeBlogFields

    return {
        id: post.sys.id,
        title: fields.title,
        publishedAt: new Date(fields.publishedAt),
        updatedAt: fields.updatedAt ? new Date(fields.updatedAt) : undefined,
        intro: fields.intro,
        featured: fields.featured ?? false,
        slug: fields.slug,
        category: mapBlogCategory(fields.category),
        image: mapBlogImage(fields.blogImage),
        body: fields.body as Document,
    } satisfies BlogPost
}
