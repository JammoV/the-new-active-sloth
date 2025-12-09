import React, { ReactElement } from 'react'
import { getBlogPosts } from '@/client/contentful/BlogApi'
import PostTile from '@/molecules/PostTile'
import Link from 'next/link'
import Button from '@/atoms/Button'
import Heading from '@/atoms/Heading'
import golfImg from '@/public/images/doodle/secondary/golf.png'
import Image from 'next/image'

const HomepageRecentPosts = async (): Promise<ReactElement> => {
    const posts = await getBlogPosts(6, true)

    if (!posts) {
        return <></>
    }

    return (
        <div className="my-lg tablet:my-xl">
            <div className="text-center">
                <Heading level={2} value="Recente artikelen" />
            </div>
            <Image
                src={golfImg}
                width={100}
                height={10}
                alt="Golf"
                className="mx-auto mt-md mb-md"
            />
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-sm mt-lg">
                {posts.map((post) => (
                    <PostTile post={post} key={post.id} />
                ))}
            </div>
            <div className="my-md text-center">
                <Link href="/artikelen">
                    <Button variant="secondary">Bekijk alle artikelen</Button>
                </Link>
            </div>
        </div>
    )
}

export default HomepageRecentPosts
