import type { Asset, Entry, EntryFields } from 'contentful'
import type { TypeBlogImage } from './TypeBlogImage'

export interface TypeBlogGalleryFields {
    title: EntryFields.Symbol
    display:
        | 'Carousel (2 portrait, 1 landscape)'
        | 'In-line (portrait images)'
        | 'Stacked (landscape images)'
        | 'Thumbnails'
    blogImages?: TypeBlogImage[]
}

export type BlogGallerySkeleton = {
    contentTypeId: 'blogGallery'
    fields: TypeBlogGalleryFields
}

export type TypeBlogGallery = Entry<BlogGallerySkeleton>
