import Link from 'next/link'
import type { FC } from 'react'
import { BlogImage, BlogPost } from '@/interfaces/BlogPost'
import ResponsiveImage from '@/atoms/ResponsiveImage'

interface PostTileProps {
    post: BlogPost
}

const PostTile: FC<PostTileProps> = ({ post }) => (
    <div className="relative aspect-video rounded-xl">
        {post.image && (
            <ResponsiveImage
                image={post.image as BlogImage}
                className="rounded-xl"
                sizes="(max-width: 768px) 100vw, 360px"
            />
        )}
        <Link href={`/${post.category.name}/${post.slug}`}>
            <div className="bg-linear-to-t from-black/50 w-full h-full absolute z-20 top-0 text-white hover:from-black/60 hover:cursor-pointer rounded-2xl">
                <div className="flex flex-col text-white absolute bottom-0 p-4">
                    <h3 className="font-fira  pt-0 drop-shadow-md desktop:text-lg">
                        {post.title}
                    </h3>
                    <span className="hidden md:block text-sm drop-shadow-md">
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
