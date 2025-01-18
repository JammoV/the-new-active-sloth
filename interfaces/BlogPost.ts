import { Document } from '@contentful/rich-text-types'
import { Asset } from 'contentful'
import { TypeBlogImageFields } from '@/client/contentful/types'
import { BlogCategory } from '@/interfaces/BlogCategory'

export interface BlogPost {
    id: string
    title: string
    publishedAt: Date
    updatedAt?: Date
    intro: string
    slug: string
    category: BlogCategory
    featured: boolean
    image?: TypeBlogImageFields | undefined
    body?: Document
}

export interface BlogImage {
    title?: string
    image: Asset
    position:
        | 'bottom'
        | 'center'
        | 'left'
        | 'left-bottom'
        | 'left-top'
        | 'right'
        | 'right-bottom'
        | 'right-top'
}
