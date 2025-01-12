import type { Asset, Entry, EntryFields } from 'contentful'
import type { TypeBlogCategory } from './TypeBlogCategory'

export interface TypeBlogFields {
    title: EntryFields.Symbol
    slug: EntryFields.Symbol
    category: TypeBlogCategory
    featured?: EntryFields.Boolean
    image: Asset
    intro: EntryFields.Text
    body?: EntryFields.RichText
}

export type BlogSkeleton = {
    contentTypeId: 'blog'
    fields: TypeBlogFields
}

export type TypeBlog = Entry<BlogSkeleton>
