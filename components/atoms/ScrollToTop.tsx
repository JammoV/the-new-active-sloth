'use client'

import type { FC } from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScrollToTop: FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <span
            className="hover:underline cursor-pointer group"
            onClick={() => scrollToTop()}
        >
            <FontAwesomeIcon
                icon={faArrowUp}
                className="w-4 desktop:hidden desktop:group-hover:inline-block group-hover:animate-bounce"
            />
            Terug naar boven
        </span>
    )
}

export default ScrollToTop
