import type { FC } from 'react'

import { getFeaturedBlogImage } from '@/client/contentful/BlogApi'
import HeroWrapper from '@/organisms/HeroWrapper'

const HeroHome: FC = async () => {
    const featuredImage = await getFeaturedBlogImage()

    return <HeroWrapper image={featuredImage}></HeroWrapper>
}

export default HeroHome
