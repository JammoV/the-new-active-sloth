import { ContentTypeHeading, JSONContent } from '@/graphql/entities/Post'

const headingMapper = (
    contentRaw: JSONContent,
    index: number
): ContentTypeHeading => {
    return {
        type: 'heading',
        identifier: `heading-${index}`,
        level: contentRaw.attrs?.['level'] || 2,
        text: contentRaw.content?.[0].text || '',
    }
}

export default headingMapper