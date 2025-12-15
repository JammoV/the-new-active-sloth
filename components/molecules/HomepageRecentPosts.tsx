import React, { type FC } from 'react'
import { getBlogPosts } from '@/client/contentful/BlogApi'
import PostTile from '@/molecules/PostTile'
import { Link } from '@/i18n/navigation'
import Button from '@/atoms/Button'
import Heading from '@/atoms/Heading'
import golfImg from '@/public/images/doodle/secondary/golf.png'
import Image from 'next/image'
import { getLocale, getTranslations } from 'next-intl/server'

interface Props {
    locale: string
}

const HomepageRecentPosts: FC<Props> = async ({ locale }) => {
    const t = await getTranslations({
        namespace: 'Generic',
        locale
    })

    const posts = await getBlogPosts(locale, 6, true)

    if (!posts) {
        return <></>
    }

    return (
        <div className="my-lg tablet:my-xl">
            <div className="text-center">
                <Heading level={2} value={t('recent-posts')} />
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
                <Link href="/posts">
                    <Button variant="secondary">{t('view-all-posts')}</Button>
                </Link>
            </div>
        </div>
    )
}

export default HomepageRecentPosts
