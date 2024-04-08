const FeaturedPostQuery = `
        query {
            posts(filter: {showOnHome: {_eq: true}}) {
                id
                title
                slug
                showOnHome
                published
                publishedAt
                category {
                    id
                    name
                }
                location
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

export default FeaturedPostQuery
