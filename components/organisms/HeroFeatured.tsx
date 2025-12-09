import type { FC } from 'react'

import { getFeaturedBlogPost } from '@/client/contentful/BlogApi'
import Button from '@/atoms/Button'
import Link from 'next/link'
import ResponsiveImage from '@/atoms/ResponsiveImage'
import Container from '@/atoms/Container'
import vliegtuigeImg from '@/public/images/doodle/primary-light/vliegtuigje.png'
import Image from 'next/image'

const HeroFeatured: FC = async () => {
    const featuredBlog = await getFeaturedBlogPost()

    if (!featuredBlog) return null

    return (
        <div className="bg-primary-lighter py-lg desktop:py-md">
            <Container>
                <div className="flex flex-col desktop:flex-row-reverse relative px-md">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="aspect-video w-full relative desktop:mx-lg">
                            <Link
                                href={`/${featuredBlog.category.slug}/${featuredBlog.slug}`}
                                title={`Bekijk artikel: ${featuredBlog.title}`}
                            >
                                <ResponsiveImage
                                    image={featuredBlog.image}
                                    sizes="(max-width: 768px) 90vw, 510px"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 pt-lg relative desktop:pb-lg  text-center tablet:text-left">
                        <Image
                            src={vliegtuigeImg}
                            alt="Vliegtuigje"
                            className="absolute top-0 opacity-20 desktop:left-lg max-desktop:right-lg max-tablet:hidden max-desktop:max-w-[300px]"
                        />
                        <div className="relative z-30 desktop:my-lg">
                            <span className="font-noto text-primary">
                                HIGHLIGHT ARTIKEL
                            </span>
                            <h3 className="font-noto text-3xl">
                                {featuredBlog.title}
                            </h3>
                            <p className="mt-sm mb-md leading-loose tablet:max-w-[600px]">
                                {featuredBlog.intro}
                            </p>
                            <Link
                                href={`/${featuredBlog.category.slug}/${featuredBlog.slug}`}
                                title={`Bekijk artikel: ${featuredBlog.title}`}
                            >
                                <Button variant="secondary">
                                    Bekijk artikel
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeroFeatured
