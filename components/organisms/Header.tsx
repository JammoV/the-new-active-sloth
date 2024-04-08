import type { FC } from 'react'

import HeaderLogo from '@/molecules/HeaderLogo'

const Header: FC = () => {
    return (
        <div className="pt-2">
            <div className="flex flex-row justify-evenly md:justify-center text-center">
                <HeaderLogo />
            </div>
            <div className="w-full bg-orange mt-2 h-2 md:mt-0 md:h-10"></div>
        </div>
    )
}

export default Header
