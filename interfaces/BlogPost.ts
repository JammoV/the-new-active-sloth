import { Document } from '@contentful/rich-text-types'
import { Asset } from 'contentful'

export interface BlogPost {
    id: string
    title: string
    intro: string
    slug: string
    category: string
    featured: boolean
    image?: BlogImage | undefined
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
