import React from 'react'
// import HeroPost from '@/organisms/HeroPost'
import About from '@/organisms/About'
import Container from '@/atoms/Container'
// import CenteredHeader from '@/atoms/CenteredHeader'
import HomepageRecentPosts from '@/molecules/HomepageRecentPosts'
import Link from 'next/link'
import Button from '@/atoms/Button'

// import Heading from '@/atoms/Heading'

export default async function Home() {
    // const featuredPost = await getFeaturedPost()

    return (
        <Container>
            <h2 className="font-fira font-bold text-xl">
                Nieuwste reisinspiratie
            </h2>
            <HomepageRecentPosts />
            {/*<About />*/}
            <div className="text-center pb-8">
                <Link href={`/posts`}>
                    <Button text="Bekijk alle reisartikelen" />
                </Link>
            </div>
        </Container>
    )
}
