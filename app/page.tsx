import React from 'react'

import Container from '@/atoms/Container'
import HomepageRecentPosts from '@/molecules/HomepageRecentPosts'

export default async function Home() {
    return (
        <Container>
            <HomepageRecentPosts />
        </Container>
    )
}
