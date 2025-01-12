import { Document } from '@contentful/rich-text-types'
import { Asset } from 'contentful'

export interface BlogPost {
    id: string
    title: string
    intro: string
    slug: string
    category: string
    featured: boolean
    image: Asset | undefined
    body?: Document
}
