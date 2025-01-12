import type { Asset, Entry, EntryFields } from 'contentful'

export interface TypeBlogGalleryFields {
    title: EntryFields.Symbol
    display:
        | 'Carousel (2 portrait, 1 landscape)'
        | 'In-line (portrait images)'
        | 'Stacked (landscape images)'
        | 'Thumbnails'
    images: Asset[]
}

export type TipGallery = {
    contentTypeId: 'blogGallery'
    fields: TypeBlogGalleryFields
}

export type TypeBlogGallery = Entry<TipGallery>
