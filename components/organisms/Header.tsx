'use client'

import { FC, useState, useEffect } from 'react'

import Link from 'next/link'
import { Hamburger } from '@/atoms/Hamburger'
import { cn } from '@/utils/cn'

type HeaderProps = {
    activeCategory?: string
    withBorder?: boolean
}

const Header: FC<HeaderProps> = ({ activeCategory, withBorder = false }) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (!isOpen) return

        // Store the original overflow value
        const originalStyle = window.getComputedStyle(document.body).overflow

        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden'
        // Get the scrollbar width to prevent layout shift
        const scrollBarWidth =
            window.innerWidth - document.documentElement.clientWidth
        // Add padding to prevent content jump
        document.body.style.paddingRight = `${scrollBarWidth}px`

        // Re-enable scrolling on cleanup
        return () => {
            document.body.style.overflow = originalStyle
            document.body.style.paddingRight = '0px'
        }
    }, [isOpen])

    const categories = [
        {
            text: 'Azië',
            href: '/azie',
        },
        {
            text: 'Midden Amerika',
            href: '/midden-amerika',
        },
        {
            text: 'Europa',
            href: '/europa',
        },
        {
            text: 'Overig',
            href: '/overig',
        },
    ]

    return (
        <>
            <div
                className={cn(
                    'flex flex-row justify-between items-center py-sm relative',
                    withBorder && 'border-b border-primary-lighter'
                )}
            >
                <Link
                    href={'/'}
                    className="font-fira font-extrabold text-xl desktop:text-[32px] text-black hover:text-secondary"
                >
                    The Active Sloth
                </Link>
                <div className="flex-row gap-lg desktop:gap-xl hidden tablet:flex">
                    {categories.map(({ text, href }) => (
                        <Link
                            key={text}
                            href={href}
                            className={cn(
                                'font-lato font-black text-lg no-underline',
                                'hover:underline hover:decoration-secondary decoration-4 underline-offset-4',
                                activeCategory === text &&
                                    'underline decoration-secondary-light'
                            )}
                        >
                            {text}
                        </Link>
                    ))}
                </div>
                <Hamburger active={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div
                className={cn(
                    'absolute w-screen top-0 left-0 bg-white px-sm pb-md tablet:hidden',
                    isOpen ? 'z-50 top-[51px] h-[calc(100dvh-51px)]' : 'hidden'
                )}
            >
                <div className="flex flex-col gap-sm border-t border-b border-primary-lighter py-sm pl-sm">
                    <Link
                        key={'alle'}
                        href={'/artikelen'}
                        className={cn(
                            'font-lato decoration-4 underline-offset-4'
                        )}
                        onClick={() => setIsOpen(false)}
                    >
                        Alle artikelen
                    </Link>
                    {categories.map(({ text, href }) => (
                        <Link
                            key={text}
                            href={href}
                            className={cn(
                                'font-lato decoration-4 underline-offset-4',
                                activeCategory === text &&
                                    'underline decoration-secondary-light'
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            {text}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Header
