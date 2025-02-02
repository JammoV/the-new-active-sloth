import React, { FC } from 'react'
import CategoryTile from '@/atoms/CategoryTile'
import europaImg from '@/public/images/doodle/black/europa.png'
import azieImg from '@/public/images/doodle/black/azie.png'
import amerikaImg from '@/public/images/doodle/black/amerika.png'
import overigImg from '@/public/images/doodle/black/overig.png'
import golfImg from '@/public/images/doodle/secondary/golf.png'

import Heading from '@/atoms/Heading'
import Image from 'next/image'

const HomepageCategories: FC = () => {
    return (
        <div className="my-lg tablet:my-xl">
            <div className="text-center">
                <Heading level={2} value="Artikelen per categorie" />
            </div>
            <Image
                src={golfImg}
                width={100}
                height={10}
                alt="Golf"
                className="mx-auto mt-md tablet:mb-md"
            />
            <div className="grid grid-cols-2 desktop:grid-cols-4 gap-xs desktop:gap-md tablet:my-md">
                <CategoryTile
                    name="Azië"
                    link="/azie"
                    height={100}
                    image={azieImg}
                />
                <CategoryTile
                    name="Europa"
                    link="/europa"
                    height={100}
                    image={europaImg}
                />

                <CategoryTile
                    name="Midden-Amerika"
                    link="/midden-amerika"
                    image={amerikaImg}
                    height={100}
                />

                <CategoryTile
                    name="Overig"
                    link="/overig"
                    height={100}
                    image={overigImg}
                />
            </div>
        </div>
    )
}

export default HomepageCategories
