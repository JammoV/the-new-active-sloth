import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { IPost } from '@/graphql/entities/Post'
import getImageUrl from '@/graphql/utils/getImageUrl'
import getPostDescription from '@/graphql/utils/getPostDescription'

interface PostListItemProps {
    post: IPost
    index: number
}

const PostListItem: FC<PostListItemProps> = ({ post, index }) => (
    <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
        <div className="flex flex-col hover:cursor-pointer md:mb-6 md:flex-row">
            <div className="md:min-w-[505px]">
                <Image
                    alt={post.mainImage.title || ''}
                    width={505}
                    height={342}
                    quality={100}
                    src={getImageUrl(post.mainImage.id, {
                        width: '505',
                        height: '342',
                    })}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    priority={index === 0}
                />
            </div>
            <div className="flex flex-col justify-center py-4 md:p-8">
                <h3 className="text-xl md:text-2xl font-roboto font-medium mb-1 md:mb-4">
                    {post.title}
                </h3>
                <p>{getPostDescription(post.body)}</p>
            </div>
        </div>
    </Link>
)

export default PostListItem
