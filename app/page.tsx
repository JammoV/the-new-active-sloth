import React from 'react'
import { getFeaturedPost } from '@/graphql/api'
import HeroPost from '@/organisms/HeroPost'
import About from '@/organisms/About'
import Container from '@/atoms/Container'
import CenteredHeader from '@/atoms/CenteredHeader'
import HomepageRecentPosts from '@/molecules/HomepageRecentPosts'
import Link from 'next/link'
import Button from '@/atoms/Button'

export default async function Home() {
    const featuredPost = await getFeaturedPost()

    return (
        <>
            {featuredPost && <HeroPost post={featuredPost} withLink={true} />}

            <About />

            <div className="bg-sand">
                <Container>
                    <CenteredHeader title="Recente reis artikelen" />
                    <HomepageRecentPosts />
                    <div className="text-center pb-8">
                        <Link href={`/posts`}>
                            <Button text="Bekijk alle reisartikelen" />
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    )
}
