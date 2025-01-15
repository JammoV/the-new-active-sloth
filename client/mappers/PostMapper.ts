import { BlogPost } from '@/interfaces/BlogPost'

import { TypeBlog, TypeBlogImageFields } from '@/client/contentful/types'

export const mapBlogPost = (post: TypeBlog): BlogPost => {
    const fields = post.fields

    const blog = {
        id: post.sys.id,
        title: fields.title,
        intro: fields.intro,
        featured: fields.featured,
        slug: fields.slug,
        // @ts-ignore
        category: fields.category?.fields?.name || '',
        image: fields.blogImage?.fields,
        body: post.fields.body,
    }

    // @ts-ignore
    return blog
}
