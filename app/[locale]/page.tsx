import React from 'react'

import Container from '@/atoms/Container'
import HomepageRecentPosts from '@/molecules/HomepageRecentPosts'
import HeroHome from '@/organisms/HeroHome'
import About from '@/organisms/About'
import HomepageCategories from '@/molecules/HomepageCategories'
import HeroFeatured from '@/organisms/HeroFeatured'
import Header from '@/organisms/Header'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('Metadata')
    return {
        title: t('site-title'),
        description: t('site-description'),
    }
}

export default async function Home({ params }: PageProps<'/[locale]'>) {
    const { locale } = await params

    return (
        <>
            <Container>
                <Header />
            </Container>

            <HeroHome locale={locale} />

            <About />

            <Container>
                <HomepageCategories />
            </Container>
            <HeroFeatured locale={locale} />

            <Container>
                <HomepageRecentPosts locale={locale} />
            </Container>
        </>
    )
}
