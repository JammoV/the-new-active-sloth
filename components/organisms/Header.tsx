import type { FC } from 'react'

import Container from '@/atoms/Container'
import Link from 'next/link'

const Header: FC = () => {
    return (
        <Container>
            <div className="flex flex-row justify-between items-center py-sm">
                <Link
                    href={'/'}
                    className="font-fira font-extrabold text-xl desktop:text-[32px] text-black"
                >
                    The Active Sloth
                </Link>
                <div className="flex-row gap-xl hidden desktop:flex">
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
            </div>
        </Container>
    )
}

export default Header
