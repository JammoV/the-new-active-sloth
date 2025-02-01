import type { FC } from 'react'

import { getFeaturedBlogPost } from '@/client/contentful/BlogApi'
import HeroWrapper from '@/organisms/HeroWrapper'
import Button from '@/atoms/Button'
import Link from 'next/link'

const HeroFeatured: FC = async () => {
    const featuredBlog = await getFeaturedBlogPost()

    if (!featuredBlog) return null

    return (
        <div
            className={`h-[calc(100dvh-54px)] tablet:min-h-[860px] desktop:h-[calc(100vh-72px)] desktop:px-sm desktop:pb-sm  bg-white`}
        >
            <HeroWrapper image={featuredBlog.image}>
                <div className="flex flex-col items-center justify-center h-full gap-lg desktop:gap-sm ">
                    <div className="flex flex-col tablet:flex-row items-center tablet:gap-xs px-md bg-black/30 rounded-xl">
                        <span className="font-fira text-white text-xl desktop:text-4xl">
                            {featuredBlog.title}
                        </span>
                    </div>
                    <div className="mx-auto">
                        <Link
                            href={`/${featuredBlog.category.slug}/${featuredBlog.slug}`}
                            title={`Bekijk artikel: ${featuredBlog.title}`}
                        >
                            <Button variant="secondary">Bekijk artikel</Button>
                        </Link>
                    </div>
                </div>
            </HeroWrapper>
        </div>
    )
}

export default HeroFeatured
