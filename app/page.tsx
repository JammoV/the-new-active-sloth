import React from 'react'

import Container from '@/atoms/Container'
import HomepageRecentPosts from '@/molecules/HomepageRecentPosts'
import HeroHome from '@/organisms/HeroHome'

export default async function Home() {
    return (
        <>
            <HeroHome />
            <Container>
                <HomepageRecentPosts />
            </Container>
        </>
    )
}
