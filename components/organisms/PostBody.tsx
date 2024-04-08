import type { FC } from 'react'
import React from 'react'

import TableOfContents from '@/molecules/TableOfContents'

import {
    BodyNode,
    ContentTypeHeading,
    ContentTypeList,
    ContentTypeBlockQuote,
    ContentTypeParagraph,
    ContentTypeTip,
    ContentTypeGallery,
} from '@/graphql/entities/Post'
import Heading from '@/atoms/Heading'
import Paragraph from '@/atoms/Paragraph'
import BulletList from '@/atoms/BulletList'
import OrderedList from '@/atoms/OrderedList'
import BlockQuote from '@/atoms/BlockQuote'
import Tip from '@/atoms/Tip'
import Gallery from '@/organisms/Gallery'

interface PostBodyProps {
    body: BodyNode[]
}

const getContentType = (node: BodyNode, index: number): React.ReactNode => {
    switch (node.type) {
        case 'heading':
            return (
                <Heading
                    key={`h-${index}`}
                    heading={node as ContentTypeHeading}
                />
            )
        case 'paragraph':
            return (
                <Paragraph
                    key={`p-${index}`}
                    paragraph={node as ContentTypeParagraph}
                />
            )
        case 'horizontalRule':
            return <hr key={`hr-${index}`} className="my-8 border-orange" />
        case 'bulletList':
            return (
                <BulletList
                    key={`bl-${index}`}
                    bulletList={node as ContentTypeList}
                />
            )
        case 'orderedList':
            return (
                <OrderedList
                    key={`ol-${index}`}
                    orderedList={node as ContentTypeList}
                />
            )
        case 'blockquote':
            return (
                <BlockQuote
                    key={`bq-${index}`}
                    blockQuote={node as ContentTypeBlockQuote}
                />
            )
        case 'tip':
            return <Tip key={`tip-${index}`} tip={node as ContentTypeTip} />
        case 'gallery':
            return (
                <Gallery
                    key={`gallery-${index}`}
                    gallery={node as ContentTypeGallery}
                />
            )
        default:
            return <></>
    }
}

const PostBody: FC<PostBodyProps> = ({ body }) => {
    const tableOfContents = body.filter((node) => node.type === 'heading')

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-12">
            <div className="md:w-2/3">
                {body.map((node, index) => getContentType(node, index))}
            </div>
            {tableOfContents && (
                <div>
                    <TableOfContents
                        headers={tableOfContents as ContentTypeHeading[]}
                    />
                </div>
            )}
        </div>
    )
}

export default PostBody
