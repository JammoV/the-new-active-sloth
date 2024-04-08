import { PostRaw } from '@/graphql/entities/Post'

const PostsQuery = `
        query {
            posts(filter: {published: {_eq: true}}) {
                id
                title
                slug
                showOnHome
                location
                published
                publishedAt
                category {
                    id
                    name
                }
                mainImage {
                    id
                    title
                    description
                    filename_download
                    width
                    height
                }
                body
            }
        }
    `

export interface PostsQueryResult {
    posts: PostRaw[]
}

export default PostsQuery
