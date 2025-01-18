import {
    TypeBlogCategory,
    TypeBlogCategoryFields,
} from '@/client/contentful/types'
import { BlogCategory } from '@/interfaces/BlogCategory'

export const mapBlogCategory = (category: TypeBlogCategory): BlogCategory => {
    const fields = category.fields as TypeBlogCategoryFields

    return {
        id: category.sys.id,
        name: fields.name,
        slug: fields.slug,
    } satisfies BlogCategory
}
