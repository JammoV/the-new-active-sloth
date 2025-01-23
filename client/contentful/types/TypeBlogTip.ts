import type { Entry, EntryFields } from 'contentful'
import { TypeBlogTipImage } from '@/client/contentful/types/TypeBlogTipImage'

export interface TypeBlogTipFields {
    title: EntryFields.Symbol
    body?: EntryFields.RichText
    description?: EntryFields.Symbol
    linkTitle?: EntryFields.Symbol
    linkUrl?: EntryFields.Symbol
    category: 'Accommodation' | 'Activity' | 'Drinks' | 'Food' | 'General'
    tipImage?: TypeBlogTipImage
}

export type TipSkeleton = {
    contentTypeId: 'blogTip'
    fields: TypeBlogTipFields
}

export type TypeBlogTip = Entry<TipSkeleton>
