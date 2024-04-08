import { BodyNode, IPost, JSONContent, PostRaw } from '@/graphql/entities/Post'

import paragraphMapper from '@/graphql/mappers/paragraphMapper'
import blockQuoteMapper from '@/graphql/mappers/blockQuoteMapper'
import headingMapper from '@/graphql/mappers/headingMapper'
import listMapper from '@/graphql/mappers/listMapper'
import tipMapper from '@/graphql/mappers/tipMapper'
import galleryMapper from '@/graphql/mappers/galleryMapper'

const postBodyMapper = (nodes: JSONContent[]): BodyNode[] => {
    return nodes.flatMap((node, index) => {
        switch (node.type) {
            case 'paragraph':
                return paragraphMapper(node, index)
            case 'blockquote':
                return blockQuoteMapper(node, index)
            case 'heading':
                return headingMapper(node, index)
            case 'bulletList':
            case 'orderedList':
                return listMapper(node, index)
            case 'tip':
                return tipMapper(node, index)
            case 'gallery':
                return galleryMapper(node, index)
            case 'horizontalRule':
                return {
                    type: 'horizontalRule',
                    identifier: `horizontalRule-${index}`,
                }
            default:
                return []
        }
    })
}

export const postMapper = (post: PostRaw): IPost => {
    return {
        id: post.id,
        title: post.title,
        showOnHome: post.showOnHome || false,
        slug: post.slug,
        category: post.category,
        location:
            post.location.coordinates.length === 2
                ? {
                      lng: parseFloat(post.location.coordinates[0]),
                      lat: parseFloat(post.location.coordinates[1]),
                  }
                : undefined,
        mainImage: post.mainImage,
        publishedAt: post.publishedAt,
        body: post.body?.content ? postBodyMapper(post.body?.content) : [],
    }
}

export default postMapper
