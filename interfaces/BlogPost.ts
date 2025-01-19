import { Document } from '@contentful/rich-text-types'
import { Asset } from 'contentful'
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
    image?: BlogImage | undefined
    body?: Document
}

export interface BlogImage {
    id: string
    title?: string
    featured: boolean
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
