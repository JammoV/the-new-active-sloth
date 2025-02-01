import { FC } from 'react'
import { cn } from '@/utils/cn'

export interface HamburgerProps {
    active: boolean
    onClick: () => void
}

export const Hamburger: FC<HamburgerProps> = ({ active, onClick }) => {
    const sharedClass = 'w-full h-1 bg-black rounded absolute transition-all'

    return (
        <div
            className="relative h-6 w-6 cursor-pointer tablet:hidden"
            onClick={onClick}
        >
            <span
                className={cn(
                    sharedClass,
                    ' duration-700 ease-in-out',
                    active && 'rotate-45 top-[calc(50%-2px)]',
                    !active && 'rotate-0 top-[1px]'
                )}
            ></span>
            <span
                className={cn(
                    sharedClass,
                    'duration-700 ease-in-out',
                    active && '-rotate-45 bottom-[calc(50%-2px)]',
                    !active && 'rotate-0 bottom-[1px]'
                )}
            ></span>

            <span
                className={cn(
                    sharedClass,
                    'transition-opacity opacity-100 duration-500 top-[calc(50%-2px)]',
                    active && 'opacity-0'
                )}
            ></span>
        </div>
    )
}
