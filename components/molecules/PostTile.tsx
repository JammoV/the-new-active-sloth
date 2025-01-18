import Link from 'next/link'
import type { FC } from 'react'
import { BlogPost } from '@/interfaces/BlogPost'
import ResponsiveImage from '@/atoms/ResponsiveImage'

interface PostTileProps {
    post: BlogPost
}

const PostTile: FC<PostTileProps> = ({ post }) => (
    <div className="relative aspect-video rounded-xl">
        {post.image && (
            <ResponsiveImage
                image={post.image.image}
                className="rounded-xl"
                sizes="(max-width: 768px) 100vw, 250px"
            />
        )}
        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <div className="bg-gradient-to-t from-black/60 w-full h-full absolute z-20 top-0 text-white hover:from-black/70 hover:cursor-pointer rounded-2xl">
                <div className="text-white absolute bottom-0 p-4">
                    <h3 className="md:text-xl font-fira font-bold md:py-2 pt-0 drop-shadow-md">
                        {post.title}
                    </h3>
                    <span className="hidden md:block md:text-xl drop-shadow-md">
                        {new Date(post.publishedAt).toLocaleDateString('nl', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </span>
                </div>
            </div>
        </Link>
    </div>
)

export default PostTile
