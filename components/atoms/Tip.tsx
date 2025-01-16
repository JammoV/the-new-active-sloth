import Image from 'next/image'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC } from 'react'
import { BlogTip } from '@/interfaces/BlogTip'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'

export enum TipType {
    GENERAL = 'General',
    FOOD = 'Food',
    DRINKS = 'Drinks',
    ACTIVITY = 'Activity',
    ACCOMMODATION = 'Accommodation',
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
    tip: BlogTip
}

const Tip: FC<TipProps> = ({ tip }) => {
    const tipConfig = tipMap[tip.category]

    return (
        <div className="flex flex-row my-md gap-md">
            <div className={`min-w-[50px]`}>
                <Image
                    src={tipConfig.src}
                    width={tipConfig.width}
                    height={tipConfig.height}
                    alt={tipConfig.alt}
                />
            </div>
            <div className="flex flex-col gap-[3px] text-md">
                <h4 className="font-bold text-primary">{tip.title}</h4>
                {tip.body && documentToReactComponents(tip.body)}
                {tip.linkUrl && (
                    <Link
                        href={tip.linkUrl}
                        className="flex flex-row items-center gap-xs text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {tip.linkUrl.startsWith('https://maps') ? (
                            <>
                                <FontAwesomeIcon
                                    className="w-4 mt-[2px] text-primary/40"
                                    icon={faMap}
                                />
                                <span>Bekijk op Google Maps</span>
                            </>
                        ) : (
                            'Meer informatie'
                        )}
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Tip
