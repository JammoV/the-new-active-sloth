import type { FC } from 'react'

import { BlogPost } from '@/interfaces/BlogPost'
import { cn } from '@/utils/cn'

interface HeroPostDescriptionProps {
    post: BlogPost
}

const HeroPostDescription: FC<HeroPostDescriptionProps> = ({ post }) => {
    return (
        <div
            className={cn(
                'absolute flex flex-col-reverse bottom-0 desktop:flex-col desktop:bottom-xl left-0'
            )}
        >
            <h1
                className={cn(
                    'font-noto font-bold text-white text-xl desktop:text-4xl',
                    'bg-primary/80',
                    'left-0 p-sm desktop:py-md desktop:px-lg',
                    'rounded-t-md rounded-br-md',
                    'desktop:rounded-t-xl desktop:rounded-br-xl'
                )}
            >
                {post.title}
            </h1>
            <span
                className={cn(
                    'bg-white self-start',
                    'text-sm desktop:text-lg',
                    'px-sm py-xs desktop:px-lg desktop:py-xs'
                )}
            >
                {post.category.name}
            </span>
        </div>
    )
}

export default HeroPostDescription
