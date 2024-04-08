import Image from 'next/image'
import type { FC } from 'react'
import { ContentTypeTip } from '@/graphql/entities/Post'

export enum TipType {
    GENERAL = 'general',
    FOOD = 'food',
    DRINKS = 'drinks',
    ACTIVITY = 'activity',
    ACCOMMODATION = 'accommodation',
}

type TipMap = {
    [key: string]: {
        src: string
        alt: string
        width: number
        height: number
    }
}

const tipMap: TipMap = {
    [TipType.GENERAL]: {
        src: '/images/icons/tip_general.png',
        width: 48,
        height: 45,
        alt: 'Algemene tip',
    },
    [TipType.FOOD]: {
        src: '/images/icons/tip_food.png',
        width: 48,
        height: 37,
        alt: 'Food tip',
    },
    [TipType.DRINKS]: {
        src: '/images/icons/tip_drinks.png',
        width: 48,
        height: 44,
        alt: 'Drinks tip',
    },
    [TipType.ACTIVITY]: {
        src: '/images/icons/tip_activity.png',
        width: 56,
        height: 44,
        alt: 'Activiteit tip',
    },
    [TipType.ACCOMMODATION]: {
        src: '/images/icons/tip_accommodation.png',
        width: 48,
        height: 37,
        alt: 'Accomodatie tip',
    },
}

export interface TipProps {
    tip: ContentTypeTip
}

const Tip: FC<TipProps> = ({ tip }) => {
    const tipConfig = tipMap[tip.tipType]

    return (
        <div className="flex ml-2 mt-4 mb-8 items-center">
            <div className={`min-w-[50px]`}>
                <Image
                    src={tipConfig.src}
                    width={tipConfig.width}
                    height={tipConfig.height}
                    alt={tipConfig.alt}
                />
            </div>
            <div
                className={`ml-4 m-h-[40px]`}
                dangerouslySetInnerHTML={{
                    __html: tip.html,
                }}
            />
        </div>
    )
}

export default Tip
