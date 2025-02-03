import React from 'react'

import Container from '@/atoms/Container'
import HomepageRecentPosts from '@/molecules/HomepageRecentPosts'
import HeroHome from '@/organisms/HeroHome'
import About from '@/organisms/About'
import HomepageCategories from '@/molecules/HomepageCategories'
import HeroFeatured from '@/organisms/HeroFeatured'
import Header from '@/organisms/Header'

export function generateMetadata() {
    return {
        title: `The Active Sloth`,
        description: `Reis, relax repeat! De leukste reisinspiratie vind je op The Active Sloth`,
    }
}

export default async function Home() {
    return (
        <>
            <Container>
                <Header />
            </Container>
            <HeroHome />

            <About />

            <Container>
                <HomepageCategories />
            </Container>
            <HeroFeatured />
            <Container>
                <HomepageRecentPosts />
            </Container>
        </>
    )
}
