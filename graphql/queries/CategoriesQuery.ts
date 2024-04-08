import { CategoryRaw } from '@/graphql/entities/Category'

const CategoriesQuery = `
        query {
            posts_categories {
                id
                name
                location
                mapZoom
            }
        }
    `

export interface CategoriesQueryResult {
    posts_categories: CategoryRaw[]
}

export default CategoriesQuery
