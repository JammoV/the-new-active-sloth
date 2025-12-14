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
import { getContentFullLocale } from '@/utils/locales'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('Metadata')
    return {
        title: t('site-title'),
        description: t('site-description'),
    }
}

export default async function Home({ params }: PageProps<'/[locale]'>) {
    const { locale } = await params
    const contentfulLocale = getContentFullLocale(locale)

    return (
        <>
            <Container>
                <Header />
            </Container>

            <HeroHome locale={contentfulLocale} />

            <About />

            <Container>
                <HomepageCategories />
            </Container>
            <HeroFeatured locale={contentfulLocale} />

            <Container>
                <HomepageRecentPosts locale={contentfulLocale} />
            </Container>
        </>
    )
}
