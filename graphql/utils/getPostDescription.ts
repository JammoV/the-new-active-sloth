import { BodyNode, ContentTypeParagraph } from '@/graphql/entities/Post'

export const getPostDescription = (blogContent: BodyNode[]): string => {
    const descriptions = blogContent.filter((node) => node.type === 'paragraph')

    if (descriptions.length) {
        const firstDescriptionContentType =
            descriptions.shift() as ContentTypeParagraph

        const firstDescription = firstDescriptionContentType.text
            .map((t) => t.text)
            .join(' ')

        return firstDescription.length > 240
            ? `${firstDescription.substring(0, 230)}...`
            : firstDescription
    }

    return ''
}

export default getPostDescription
