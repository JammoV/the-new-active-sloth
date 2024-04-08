import { createDirectus, staticToken, graphql } from '@directus/sdk'
import { PostRaw } from '@/graphql/entities/Post'

interface Schema {
    posts: PostRaw[]
}

const client = createDirectus<Schema>(process.env.DIRECTUS_BASE_URL as string)
    .with(staticToken(process.env.DIRECTUS_ACCESS_KEY as string))
    .with(graphql())

export default client
