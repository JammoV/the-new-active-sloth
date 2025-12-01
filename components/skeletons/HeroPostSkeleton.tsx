import type { FC } from 'react'

const HeroPostSkeleton: FC = () => {
    return (
        <div className="animate-pulse desktop:h-[calc(100vh-72px)] h-[336px] desktop:px-sm pb-sm">
            <div className="relative bg-gray-100 desktop:rounded-xl h-full w-full"></div>
        </div>
    )
}

export default HeroPostSkeleton
