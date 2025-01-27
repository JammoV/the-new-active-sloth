import React from 'react'

import Container from '@/atoms/Container'
import HomepageRecentPosts from '@/molecules/HomepageRecentPosts'
import HeroHome from '@/organisms/HeroHome'
import About from '@/organisms/About'

export default async function Home() {
    return (
        <>
            <HeroHome />

            <About />
            <Container>
                <HomepageRecentPosts />
            </Container>
        </>
    )
}
