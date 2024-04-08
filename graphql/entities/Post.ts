import { TipType } from '@/atoms/Tip'
import { ICategory } from '@/graphql/entities/Category'

export interface IPost {
    id: number
    title: string
    slug: string
    showOnHome: boolean
    location?: ILocation
    publishedAt: string
    category: ICategory
    mainImage: ImageRaw
    body: BodyNode[]
}

export interface ILocation {
    lat: number
    lng: number
}

export interface PostRaw {
    id: number
    title: string
    slug: string
    location: {
        coordinates: string[]
    }
    showOnHome: boolean | null
    published: boolean
    publishedAt: string
    category: {
        id: string
        name: string
        mapZoom: number
    }
    mainImage: ImageRaw
    body?: JSONContent | null
    wysiwyg_nodes?: EditorNodes[]
}

export type EditorNodes = Record<string, any>

export type JSONContent = {
    type?: string
    attrs?: Record<string, any>
    content?: JSONContent[]
    marks?: {
        type: string
        attrs?: Record<string, any>
        [key: string]: any
    }[]
    text?: string
    [key: string]: any
}

export interface ImageRaw {
    id: string
    title: string
    description: string | null
    filename_download: string
    width: number
    height: number
}

export type BodyNode =
    | ContentTypeHeading
    | ContentTypeParagraph
    | ContentTypeList
    | ContentTypeBlockQuote
    | ContentTypeHorizontalRule
    | ContentTypeTip
    | ContentTypeGallery

export interface ContentTypeBase {
    type: string
    identifier: string
}

export interface ContentTypeText extends ContentTypeBase {
    text: string
    style?: string
}

export interface ContentTypeHeading extends ContentTypeBase {
    level: number
    text: string
}

export interface ContentTypeParagraph extends ContentTypeBase {
    text: ContentTypeText[]
}

export interface ContentTypeList extends ContentTypeBase {
    items: { text: string; identifier: string }[]
}

export interface ContentTypeBlockQuote extends ContentTypeBase {
    text: string
}

export interface ContentTypeHorizontalRule extends ContentTypeBase {}

export interface ContentTypeTip extends ContentTypeBase {
    tipType: TipType
    html: string
}

export interface ContentTypeGallery extends ContentTypeBase {
    title: string
    display: string
    items: ImageRaw[]
}
