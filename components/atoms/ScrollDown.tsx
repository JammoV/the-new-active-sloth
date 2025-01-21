'use client'

import type { FC } from 'react'

const ScrollDown: FC = () => {
    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }

    return (
        <div className="relative w-[84px] h-[32px]">
            <button
                className="absolute z-10 bg-secondary  text-sm w-[84px] h-[32px] rounded-lg text-white"
                onClick={() => scrollDown()}
            >
                ONTDEK
            </button>
            <div className="absolute  -translate-x-1/2 left-1/2 bottom-[-10px] rotate-45 w-[20px] h-[20px]  border-secondary border-4 rounded-br-md  bg-white" />
            <div className="absolute  -translate-x-1/2 left-1/2 bottom-[-1px] rotate-45 w-[20px] h-[20px] bg-secondary" />
        </div>
    )
}

export default ScrollDown
