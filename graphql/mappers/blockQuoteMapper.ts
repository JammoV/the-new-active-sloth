import { ContentTypeBlockQuote, JSONContent } from '@/graphql/entities/Post'

const blockQuoteMapper = (
    contentRaw: JSONContent,
    index: number
): ContentTypeBlockQuote => {
    return {
        type: contentRaw.type || 'blockQuote',
        identifier: `quote-${index}`,
        text: contentRaw.content?.[0].content?.[0].text || '',
    }
}

export default blockQuoteMapper
