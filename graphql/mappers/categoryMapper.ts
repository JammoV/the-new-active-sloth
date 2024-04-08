import { CategoryRaw, ICategory } from '@/graphql/entities/Category'

export const categoryMapper = (category: CategoryRaw): ICategory => {
    return {
        id: category.id,
        name: category.name,
        mapZoom: category.mapZoom || 5,
        location:
            category.location?.coordinates.length === 2
                ? {
                      lng: parseFloat(category.location.coordinates[0]),
                      lat: parseFloat(category.location.coordinates[1]),
                  }
                : undefined,
    }
}

export default categoryMapper
