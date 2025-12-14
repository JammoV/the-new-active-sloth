'use client'

import { FC, useState, useEffect, useRef } from 'react'

import { Link } from '@/i18n/navigation'
import { Hamburger } from '@/atoms/Hamburger'
import Container from '@/atoms/Container'
import { cn } from '@/utils/cn'
import { useTranslations } from 'next-intl'

type HeaderProps = {
    activeCategory?: string
    withBorder?: boolean
}

const Header: FC<HeaderProps> = ({ activeCategory, withBorder = false }) => {
    const tCategories = useTranslations('Categories')
    const tGeneric = useTranslations('Generic')
    const [isOpen, setIsOpen] = useState(false)
    const [visible, setVisible] = useState(true)
    const [atTop, setAtTop] = useState(true)
    const lastScrollY = useRef(0)
    const headerRef = useRef<HTMLDivElement>(null)
    const headerHeight = useRef(0)

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

    useEffect(() => {
        if (headerRef.current) {
            headerHeight.current = headerRef.current.offsetHeight
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Check if we're at the top of the page
            setAtTop(currentScrollY < 10)

            // Show header when scrolling up or at the top
            if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
                setVisible(true)
            }
            // Hide header when scrolling down and not at the top
            else if (
                currentScrollY > 100 &&
                currentScrollY > lastScrollY.current
            ) {
                setVisible(false)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const categories = [
        {
            text: tCategories('Asia.title'),
            href: tCategories('Asia.url-path'),
        },
        {
            text: tCategories('CentralAmerica.title'),
            href: tCategories('CentralAmerica.url-path'),
        },
        {
            text: tCategories('Europe.title'),
            href: tCategories('Europe.url-path'),
        },
        {
            text: tCategories('Other.title'),
            href: tCategories('Other.url-path'),
        },
    ]

    return (
        <>
            <div
                ref={headerRef}
                className={cn(
                    'fixed top-0 left-0 w-full z-50',
                    'transition-all duration-300 bg-white',
                    !atTop && 'shadow-md',
                    withBorder && 'border-b border-primary-lighter',
                    !visible && '-translate-y-full'
                )}
            >
                <Container>
                    <div className="flex flex-row justify-between items-center py-sm">
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
                                    href={`/${href}`}
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
                        <Hamburger
                            active={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    </div>
                </Container>
            </div>
            <div
                className={cn(
                    'fixed w-screen left-0 bg-white pb-md tablet:hidden',
                    isOpen ? 'z-40 top-[51px] h-[calc(100dvh-51px)]' : 'hidden'
                )}
            >
                <Container>
                    <div className="flex flex-col gap-sm border-t border-b border-primary-lighter py-sm">
                        <Link
                            key={'all'}
                            href={'/posts'}
                            className={cn(
                                'font-lato decoration-4 underline-offset-4'
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            {tGeneric('all-posts')}
                        </Link>
                        {categories.map(({ text, href }) => (
                            <Link
                                key={text}
                                href={`/${href}`}
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
                </Container>
            </div>
            {/* Add an invisible spacer when header is fixed to prevent content jump */}
            <div className="h-[51px]" />
        </>
    )
}

export default Header
