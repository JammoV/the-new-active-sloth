'use client'

import type { FC } from 'react'
import Button from '@/atoms/Button'

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
        </div>
    )
}

export default ScrollDown
