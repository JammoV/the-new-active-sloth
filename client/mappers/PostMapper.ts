import { BlogPost } from '@/interfaces/BlogPost'
import { Document } from '@contentful/rich-text-types'

import {
    TypeBlog,
    TypeBlogCategoryFields,
    TypeBlogFields,
    TypeBlogImageFields,
} from '@/client/contentful/types'

export const mapBlogPost = (post: TypeBlog): BlogPost => {
    const fields = post.fields as TypeBlogFields
    const categoryFields = fields.category?.fields as TypeBlogCategoryFields
    const blogImageFields = fields.blogImage?.fields as TypeBlogImageFields

    return {
        id: post.sys.id,
        title: fields.title,
        publishedAt: new Date(fields.publishedAt),
        updatedAt: fields.updatedAt ? new Date(fields.updatedAt) : undefined,
        intro: fields.intro,
        featured: fields.featured ?? false,
        slug: fields.slug,
        category: categoryFields ? categoryFields.name : '',
        image: blogImageFields ?? undefined,
        body: fields.body as Document,
    } satisfies BlogPost
}
