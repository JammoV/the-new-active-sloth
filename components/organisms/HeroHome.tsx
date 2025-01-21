import type { FC } from 'react'

import { getFeaturedBlogImage } from '@/client/contentful/BlogApi'
import HeroWrapper from '@/organisms/HeroWrapper'
import ScrollDown from '@/atoms/ScrollDown'

const HeroHome: FC = async () => {
    const featuredImage = await getFeaturedBlogImage()

    return (
        <div
            className={`h-[calc(100vh-54px)] desktop:h-[calc(100vh-72px)] desktop:px-sm desktop:pb-sm  bg-white`}
        >
            <HeroWrapper image={featuredImage}>
                <div className="flex flex-col items-center justify-center h-full gap-lg desktop:gap-sm">
                    <div className="flex flex-col tablet:flex-row items-center tablet:gap-xs">
                        <span className="font-fira leading-10 tablet:leading-normal text-4xl">
                            Reis
                        </span>
                        <span className="font-caveat leading-10 tablet:leading-normal text-4xl">
                            Relax
                        </span>
                        <span className="font-fira leading-10 tablet:leading-normal text-4xl">
                            Repeat
                        </span>
                    </div>
                    <ScrollDown />
                </div>
            </HeroWrapper>
        </div>
    )
}

export default HeroHome
