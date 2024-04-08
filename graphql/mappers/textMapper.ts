import { ContentTypeText, JSONContent } from '@/graphql/entities/Post'

const textMapper = (content: JSONContent, index: number): ContentTypeText => {
    return {
        type: 'text',
        identifier: `test-${index}`,
        text: content.text || '',
        style: content.marks?.[0]['type'] || undefined,
    }
}

export default textMapper
