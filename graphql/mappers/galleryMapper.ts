import {
    ContentTypeGallery,
    ImageRaw,
    JSONContent,
} from '@/graphql/entities/Post'

const galleryMapper = (
    content: JSONContent,
    index: number
): ContentTypeGallery => {
    return {
        type: 'gallery',
        identifier: `gallery-${index}`,
        title: content.attrs?.data.title || '',
        display: content.attrs?.data.display || 'inline',
        items: content.attrs?.data.items.map(
            (item: { id: string; image: ImageRaw }) => item.image
        ),
    }
}

export default galleryMapper
