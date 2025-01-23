import type { Asset, Entry, EntryFields } from 'contentful'

export interface TypeBlogTipImageFields {
    title?: EntryFields.Symbol
    image: Asset
}

export type TipImageSkeleton = {
    contentTypeId: 'blogTipImage'
    fields: TypeBlogTipImageFields
}

export type TypeBlogTipImage = Entry<TipImageSkeleton>
