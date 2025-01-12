import Image from 'next/image'
import Link from 'next/link'
import headerImg from '@/public/images/Logo.png'
import type { FC } from 'react'

const HeaderLogo: FC = () => {
    return (
        <div className="flex flex-row items-center gap-4">
            <div>
                <Link href={'/'}>
                    <Image
                        src={headerImg}
                        width={354}
                        height={357}
                        alt="Back to home"
                        className="cursor-pointer w-28"
                    />
                </Link>
            </div>
            <div className="flex flex-col">
                <span className="font-fira font-extrabold text-3xl">The Active Sloth</span>
                <span>Exploring the world, one step at a time</span>
            </div>
        </div>
    )
}

export default HeaderLogo
