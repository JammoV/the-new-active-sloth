import React, { Suspense } from 'react'

import Container from '@/atoms/Container'
import HomepageRecentPosts from '@/molecules/HomepageRecentPosts'
import HeroHome from '@/organisms/HeroHome'
import About from '@/organisms/About'
import HomepageCategories from '@/molecules/HomepageCategories'
import HeroFeatured from '@/organisms/HeroFeatured'
import Header from '@/organisms/Header'
import { Metadata } from 'next'
import HeroPostSkeleton from '@/skeletons/HeroPostSkeleton'

export async function generateMetadata(): Promise<Metadata> {
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
            <Suspense fallback={<HeroPostSkeleton />}>
                <HeroHome />
            </Suspense>

            <About />

            <Container>
                <HomepageCategories />
            </Container>
            <Suspense fallback={'<div>Loading...</div>'}>
                <HeroFeatured />
            </Suspense>
            <Container>
                <Suspense fallback={'<div>Loading...</div>'}>
                    <HomepageRecentPosts />
                </Suspense>
            </Container>
        </>
    )
}
