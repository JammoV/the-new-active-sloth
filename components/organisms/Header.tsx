'use client'

import { FC, useState } from 'react'

import Container from '@/atoms/Container'
import Link from 'next/link'
import { Hamburger } from '@/atoms/Hamburger'
import { cn } from '@/utils/cn'

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Container>
            <div className="flex flex-row justify-between items-center py-sm relative">
                <Link
                    href={'/'}
                    className="font-fira font-extrabold text-xl desktop:text-[32px] text-black"
                >
                    The Active Sloth
                </Link>
                <div className="flex-row gap-lg desktop:gap-xl hidden tablet:flex">
                    {[
                        {
                            text: 'Azië',
                            href: '/azie',
                        },
                        {
                            text: 'Midden-Amerika',
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
                    ].map(({ text, href }) => (
                        <Link
                            key={text}
                            href={href}
                            className="font-lato font-black text-lg underline-offset-4 hover:underline"
                        >
                            {text}
                        </Link>
                    ))}
                </div>
                <Hamburger active={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div
                className={cn(
                    'absolute w-screen top-0 left-0 bg-white p-sm pb-md tablet:hidden',
                    isOpen ? 'z-50 flex flex-col top-[50px] gap-sm ' : 'hidden'
                )}
            >
                {[
                    {
                        text: 'Azië',
                        href: '/azie',
                    },
                    {
                        text: 'Midden-Amerika',
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
                ].map(({ text, href }) => (
                    <Link
                        key={text}
                        href={href}
                        className="font-lato font-black text-lg underline-offset-4 hover:underline"
                        onClick={() => setIsOpen(false)}
                    >
                        {text}
                    </Link>
                ))}
            </div>
        </Container>
    )
}

export default Header
