import type { FC } from 'react'

import { BlogPost } from '@/interfaces/BlogPost'

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
                className={
                    'font-noto font-bold text-white text-2xl desktop:text-4xl bg-primary bg-opacity-90 p-sm desktop:py-md desktop:px-lg rounded-t-xl rounded-br-xl'
                }
            >
                {post.title}
            </h1>
            <span className="bg-white text-lg px-lg py-xs self-start">
                {post.category}
            </span>
        </div>
    )
}

export default HeroPostDescription
