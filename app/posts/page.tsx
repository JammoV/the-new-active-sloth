import React, { ReactElement } from 'react'

import CenteredHeader from '@/atoms/CenteredHeader'
import Container from '@/atoms/Container'
import PostsWithFilter from '@/organisms/PostsWithFilter'

export const revalidate = 1200

const Page = async (): Promise<ReactElement> => {
    // const posts = await getPosts()
    // const categories = await getCategories()

    return (
        <>
            <Container>
                <div className="mt-8 mb-2">
                    <CenteredHeader title="Alle reis artikelen" />
                </div>
            </Container>

            {/*<PostsWithFilter posts={posts} categories={categories} />*/}
        </>
    )
}

export default Page
