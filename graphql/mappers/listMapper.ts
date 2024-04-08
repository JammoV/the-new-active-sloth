import { ContentTypeList, JSONContent } from '@/graphql/entities/Post'

const listMapper = (
    contentRaw: JSONContent,
    lIndex: number
): ContentTypeList => {
    const type = contentRaw.type === 'bulletList' ? 'bulletList' : 'orderedList'
    return {
        type: type,
        identifier: `${type}-${lIndex}`,
        items:
            contentRaw.content?.map((listItem, index) => ({
                text: listItem.content?.[0].content?.[0].text || '',
                identifier: `${type}-${lIndex}-i-${index}`,
            })) || [],
    }
}

export default listMapper
