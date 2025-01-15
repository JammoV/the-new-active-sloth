import type { Asset, Entry, EntryFields } from 'contentful'

export interface TypeBlogImageFields {
    title?: EntryFields.Symbol
    image: Asset
    position:
        | 'top'
        | 'bottom'
        | 'center'
        | 'left'
        | 'left-bottom'
        | 'left-top'
        | 'right'
        | 'right-bottom'
        | 'right-top'
}

export type BlogImageSkeleton = {
    contentTypeId: 'blogImage'
    fields: TypeBlogImageFields
}

export type TypeBlogImage = Entry<BlogImageSkeleton>
