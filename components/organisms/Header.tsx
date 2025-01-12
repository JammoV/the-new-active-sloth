import type { FC } from 'react'

import HeaderLogo from '@/molecules/HeaderLogo'
import headerImg from '@/public/images/active_header.jpg'
import Image from 'next/image'
import Container from '@/atoms/Container'
import Link from 'next/link'

const Header: FC = () => {
    return (
        <Container>
            <div className="flex flex-row justify-between items-center py-sm">
                <Link href={'/'} className="font-fira font-extrabold text-[32px] text-primary">
                    The Active Sloth
                </Link>
                <div className="flex flex-row gap-xl">
                    <Link
                        href={'#'}
                        className="font-lato font-black text-lg hover:underline"
                    >
                        Azië
                    </Link>
                    <Link href={'#'} className="font-lato font-black text-lg">
                        Amerika
                    </Link>
                    <Link href={'#'} className="font-lato font-black text-lg">
                        Europa
                    </Link>
                    <Link href={'#'} className="font-lato font-black text-lg">
                        Overig
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Header
