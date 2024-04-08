const StaticPathsQuery = `
        query {
            posts(filter: {published: {_eq: true}}) {
                slug
            }
        }
    `

export interface StaticPathsQueryResult {
    posts: { slug: string }[]
}

export default StaticPathsQuery
