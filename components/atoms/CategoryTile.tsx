import Image, { StaticImageData } from 'next/image'
import { Link } from '@/i18n/navigation'
import React from 'react'

interface CategoryTileProps {
    name: string
    link: string
    image: StaticImageData
    height: number
}

const CategoryTile: React.FC<CategoryTileProps> = ({
    name,
    link,
    image,
    height,
}) => {
    return (
        <Link href={link}>
            <div className="flex flex-col items-center my-md gap-sm relative group">
                <div className="transition-opacity opacity-0 group-hover:opacity-100 duration-500 ease-in-out w-[150px] h-[150px] absolute -top-md rounded-full bg-cta/10 z-10"></div>
                <Image
                    src={image}
                    height={height}
                    className="z-20"
                    alt="Bekijk Europa"
                />
                <span className="font-noto w-[160px] tablet:w-[210px] text-center z-20  bg-secondary-lighter/50 px-sm desktop:px-md tablet:py-xs border-dashed border-b-2 border-secondary-light/50">
                    {name}
                </span>
            </div>
        </Link>
    )
}

export default CategoryTile
