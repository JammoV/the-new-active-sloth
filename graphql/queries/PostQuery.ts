const PostQuery = `
        query($slug: String!) {
            posts(filter: {slug: {_eq: $slug}, published: {_eq: true}}) {
                id
                title
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
                wysiwyg_nodes {
                    id
                    item {
                        ... on posts_tip {
                            id
                            type
                            text
                        }
                        ... on posts_gallery {
                            id
                            title
                            display
                            items {
                                id
                                image {
                                    id
                                    title
                                    description
                                    filename_download
                                    width
                                    height
                                }
                            }
                        }
                    }
                }
            }
        }
    `

export default PostQuery
