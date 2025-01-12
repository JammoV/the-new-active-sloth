import type { FC, ReactNode } from 'react'
import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
    Block,
    BLOCKS,
    Document,
    Inline,
    INLINES,
    Text,
} from '@contentful/rich-text-types'
import Heading from '@/atoms/Heading'
import Gallery from '@/organisms/Gallery'
import Tip from '@/atoms/Tip'

interface PostBodyProps {
    body: Document
}

const options = {
    renderNode: {
        [INLINES.ENTRY_HYPERLINK]: (node: Block | Inline) => {
            if (node.data.target.sys.contentType.sys.id === 'blog') {
                return (
                    <a
                        href={`/posts/${node.data.target.fields.slug}`}
                        title="Bekijk artikel"
                        className="text-[#d2916b] font-bold underline underline-offset-4"
                    >
                        {node.data.target.fields.title}
                    </a>
                )
            }

            return <a></a>
        },
        [BLOCKS.HEADING_1]: (node: Block | Inline) => {
            const textContent = node.content[0] as Text
            return <Heading level={1} value={textContent.value} />
        },
        [BLOCKS.HEADING_2]: (node: Block | Inline) => {
            const textContent = node.content[0] as Text
            return <Heading level={2} value={textContent.value} />
        },
        [BLOCKS.HEADING_3]: (node: Block | Inline) => {
            const textContent = node.content[0] as Text
            return <Heading level={3} value={textContent.value} />
        },
        [BLOCKS.HEADING_4]: (node: Block | Inline) => {
            const textContent = node.content[0] as Text
            return <Heading level={4} value={textContent.value} />
        },
        [BLOCKS.HR]: () => <hr className="border-primary-light my-md" />,
        [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode[]) => {
            return <p className="text-lg leading-relaxed">{children}</p>
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
            const contentTypeId = node.data.target.sys.contentType?.sys
                .id as string

            if (contentTypeId === 'blogGallery') {
                const { display, images } = node.data.target.fields

                return <Gallery images={images} displayType={display} />
            }

            if (contentTypeId === 'blogTip') {
                const { title, body, linkTitle, linkUrl, category } =
                    node.data.target.fields

                return (
                    <Tip
                        tip={{
                            title,
                            body,
                            linkTitle,
                            linkUrl,
                            category,
                        }}
                    />
                )
            }

            return <></>
        },
    },
}

const PostBody: FC<PostBodyProps> = ({ body }) => {
    // @ts-ignore
    return documentToReactComponents(body, options)
}

export default PostBody
