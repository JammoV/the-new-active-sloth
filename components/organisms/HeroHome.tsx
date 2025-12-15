import type { FC } from 'react'

import { getFeaturedBlogImage } from '@/client/contentful/BlogApi'
import HeroWrapper from '@/organisms/HeroWrapper'
import ScrollDown from '@/atoms/ScrollDown'
import { getTranslations } from 'next-intl/server'

interface Props {
    locale: string
}

const HeroHome: FC<Props> = async ({ locale }) => {
    const featuredImage = await getFeaturedBlogImage(locale)
    const t = await getTranslations({
        namespace: 'Home.Hero',
        locale
    })

    return (
        <div
            className={`h-[calc(100dvh-52px)] desktop:h-[calc(100vh-72px)] tablet:min-h-[700px] bg-linear-to-b from-white to-primary-light desktop:px-sm desktop:pb-sm  bg-white`}
        >
            <HeroWrapper image={featuredImage}>
                <div className="flex flex-col items-center justify-center h-full gap-lg desktop:gap-sm">
                    <div className="flex flex-col tablet:flex-row items-center tablet:gap-xs">
                        <span className="font-fira leading-10 tablet:leading-normal text-4xl">
                            {t('travel')}
                        </span>
                        <span className="font-caveat leading-10 tablet:leading-normal text-4xl">
                            Relax
                        </span>
                        <span className="font-fira leading-10 tablet:leading-normal text-4xl">
                            Repeat
                        </span>
                    </div>
                    <div className="mx-auto">
                        <ScrollDown label={t('discover')} />
                    </div>
                </div>
            </HeroWrapper>
        </div>
    )
}

export default HeroHome
