import { Document } from '@contentful/rich-text-types'

export interface BlogTip {
    title: string
    body?: Document
    description?: string
    linkTitle?: string
    linkUrl?: string
    category: 'Accommodation' | 'Activity' | 'Drinks' | 'Food' | 'General'
}
