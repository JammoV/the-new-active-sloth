'use client'

import type { FC } from 'react'
import Button from '@/atoms/Button'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { cn } from '@/utils/cn'

type ScrollDownProps = {
    label: string
    toPage?: number
    className?: string
}

const ScrollDown: FC<ScrollDownProps> = ({ label, toPage = 1, className }) => {
    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight * toPage,
            behavior: 'smooth',
        })
    }

    return (
        <div className={cn('relative self-start group', className)}>
            <Button
                onClick={() => scrollDown()}
                className="z-10"
                variant="secondary"
                title="Scroll naar beneden"
            >
                {label}
            </Button>
            <FontAwesomeIcon
                icon={faChevronDown}
                className={cn(
                    'absolute w-3 h-3',
                    'text-white bg-secondary',
                    '-translate-x-1/2 left-1/2 bottom-[-8px]',
                    'px-xs pb-[2px] rounded-b-md',
                    'group-hover:bottom-[-9px]'
                )}
            />
        </div>
    )
}

export default ScrollDown
