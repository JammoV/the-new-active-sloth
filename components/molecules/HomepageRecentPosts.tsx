import React, { ReactElement } from 'react'
import { getBlogPosts } from '@/client/contentful/BlogApi'
import PostTile from '@/molecules/PostTile'
import ResponsiveImage from '@/atoms/ResponsiveImage'
import Link from 'next/link'
import Button from '@/atoms/Button'
import Heading from '@/atoms/Heading'
import golfImg from '@/public/images/doodle/secondary/golf.png'
import Image from 'next/image'

const HomepageRecentPosts = async (): Promise<ReactElement> => {
    const posts = await getBlogPosts(3, true)

    if (!posts) {
        return <></>
    }

    return (
        <div className="my-xl">
            <div className="text-center">
                <Heading level={2} value="Recente artikelen" />
            </div>
            <Image
                src={golfImg}
                width={100}
                height={10}
                alt="Golf"
                className="mx-auto mt-lg tablet:mt-md mb-md"
            />
            <div className="flex flex-col my-lg gap-lg tablet:gap-md">
                {posts.map((post) => (
                    <div
                        className="flex flex-col tablet:flex-row gap-sm tablet:gap-lg"
                        key={post.id}
                    >
                        <div className="tablet:flex-1 relative w-full h-[200px] tablet:w-auto tablet:h-[400px]">
                            <ResponsiveImage
                                image={post.image}
                                className="rounded-lg"
                                sizes="(max-width: 768px) 100vw, 600px"
                            />
                        </div>
                        <div className="tablet:flex-1 tablet:self-stretch flex tablet:items-center">
                            <div className="flex flex-col gap-md desktop:pr-xl">
                                <div className="flex flex-col gap-sm">
                                    <h3 className="font-noto text-xl table:text-2xl">
                                        {post.title}
                                    </h3>
                                    <p className="leading-relaxed">
                                        {post.intro}
                                    </p>
                                </div>
                                <Link
                                    href={`/${post.category.name}/${post.slug}`}
                                >
                                    <Button size="md">Lees artikel</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomepageRecentPosts
