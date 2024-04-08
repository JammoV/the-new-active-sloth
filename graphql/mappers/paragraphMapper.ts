import { ContentTypeParagraph, JSONContent } from '@/graphql/entities/Post'
import textMapper from '@/graphql/mappers/textMapper'

const paragraphMapper = (
    contentRaw: JSONContent,
    pIndex: number
): ContentTypeParagraph => {
    return {
        type: contentRaw.type || 'paragraph',
        identifier: `paragraph-${pIndex}`,
        text:
            contentRaw.content?.map((text, index) => textMapper(text, index)) ||
            [],
    }
}

export default paragraphMapper
