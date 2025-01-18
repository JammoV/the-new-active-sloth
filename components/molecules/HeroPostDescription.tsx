import type { FC } from 'react'

import { BlogPost } from '@/interfaces/BlogPost'
import { cn } from '@/utils/cn'

interface HeroPostDescriptionProps {
    post: BlogPost
    withLink: boolean
}

const HeroPostDescription: FC<HeroPostDescriptionProps> = ({
    post,
    withLink,
}) => {
    return (
        <div
            className={
                'absolute left-0 bottom-md desktop:bottom-xl flex flex-col'
            }
        >
            <h1
                className={cn(
                    'font-noto font-bold text-white text-xl desktop:text-4xl',
                    'bg-primary bg-opacity-90',
                    'p-sm desktop:py-md desktop:px-lg',
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
                {post.category}
            </span>
        </div>
    )
}

export default HeroPostDescription
