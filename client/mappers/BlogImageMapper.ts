import { TypeBlogImage, TypeBlogImageFields } from '@/client/contentful/types'
import { BlogImage } from '@/interfaces/BlogPost'

export const mapBlogImage = (image: TypeBlogImage): BlogImage => {
    const fields = image.fields as TypeBlogImageFields

    return {
        id: image.sys.id,
        title: fields.title,
        position: fields.position,
        featured: fields.featured ?? false,
        image: fields.image,
    } satisfies BlogImage
}
