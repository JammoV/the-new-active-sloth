import { EditorNodes, JSONContent } from '@/graphql/entities/Post'

const injectWysiwygNodes = (
    data: EditorNodes[],
    content: JSONContent,
    primaryKeyField = 'id',
    itemField = 'item'
) => {
    return injectNodes(content)

    function injectNodes(content: JSONContent) {
        if (!content) return null

        if (content.type == 'relation-block' && content.attrs?.id) {
            const relatedNode = data.find(
                (node) => node[primaryKeyField] === content.attrs!.id
            )

            if (relatedNode) {
                // Convert collection name (e.g. posts_tip, posts_gallery) to content type name (tip, gallery)
                content.type = content.attrs.collection.split('_').pop()
                content.attrs.data = relatedNode?.[itemField]
            }
        }

        content.content?.map(injectNodes)

        return content
    }
}

export default injectWysiwygNodes
