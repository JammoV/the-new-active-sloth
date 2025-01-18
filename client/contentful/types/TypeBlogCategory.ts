import type { Entry, EntryFields } from 'contentful'

export interface TypeBlogCategoryFields {
    name: EntryFields.Symbol
    slug: EntryFields.Symbol
}

export type CategorySkeleton = {
    contentTypeId: 'blogCategory'
    fields: TypeBlogCategoryFields
}

export type TypeBlogCategory = Entry<CategorySkeleton>
