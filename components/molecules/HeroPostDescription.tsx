import Link from 'next/link'
import type { FC } from 'react'

import type { IPost } from '@/graphql/entities/Post'
import Button from '@/atoms/Button'
import getPostDescription from '@/graphql/utils/getPostDescription'

interface HeroPostDescriptionProps {
    post: IPost
    withLink: boolean
}

const HeroPostDescription: FC<HeroPostDescriptionProps> = ({
    post,
    withLink,
}) => {
    return (
        <div
            className={
                'flex flex-col items-start text-center md:text-left md:w-1/2 pt-20 pb-24 md:pb-32 relative min-h-[360px]'
            }
        >
            <h2 className={'font-roboto font-bold text-white text-4xl'}>
                {post.title}
            </h2>
            {withLink && (
                <>
                    <p className="text-white mt-6 mb-8">
                        {getPostDescription(post.body)}
                    </p>
                    <>
                        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                            <Button text="Artikel lezen" />
                        </Link>
                    </>
                </>
            )}
        </div>
    )
}

export default HeroPostDescription
