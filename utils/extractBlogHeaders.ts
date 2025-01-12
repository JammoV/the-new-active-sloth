import { Block, BLOCKS, Document } from '@contentful/rich-text-types'
import { ContentHeading } from '@/molecules/TableOfContents'
import { generateIdentifier } from '@/utils/generateIdentifier'

export const extractBlogHeaders = (document: Document): ContentHeading[] => {
    const contentHeadings: ContentHeading[] = []

    document.content.forEach((block: Block) => {
        if (block.nodeType === BLOCKS.HEADING_1) {
            // @ts-ignore
            const headingText = block.content[0].value

            if (headingText) {
                contentHeadings.push({
                    level: 1,
                    identifier: generateIdentifier(headingText),
                    text: headingText,
                })
            }
        } else if (block.nodeType === BLOCKS.HEADING_2) {
            // @ts-ignore
            const headingText = block.content[0].value

            if (headingText) {
                contentHeadings.push({
                    level: 2,
                    identifier: generateIdentifier(headingText),
                    text: headingText,
                })
            }
        } else if (block.nodeType === BLOCKS.HEADING_3) {
            // @ts-ignore
            const headingText = block.content[0].value

            if (headingText) {
                contentHeadings.push({
                    level: 3,
                    identifier: generateIdentifier(headingText),
                    text: headingText,
                })
            }
        }
    })

    return contentHeadings
}
