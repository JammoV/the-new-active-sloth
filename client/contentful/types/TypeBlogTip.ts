import type { Entry, EntryFields } from 'contentful'

export interface TypeBlogTipFields {
    title: EntryFields.Symbol
    body?: EntryFields.RichText
    description?: EntryFields.Symbol
    linkTitle?: EntryFields.Symbol
    linkUrl?: EntryFields.Symbol
    category: 'Accommodation' | 'Activity' | 'Drinks' | 'Food' | 'General'
}

export type TipSkeleton = {
    contentTypeId: 'blogTip'
    fields: TypeBlogTipFields
}

export type TypeBlogTip = Entry<TipSkeleton>
