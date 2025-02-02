import type { FC } from 'react'
import React from 'react'

import Container from '@/atoms/Container'
import ScrollToTop from '@/atoms/ScrollToTop'

const Footer: FC = () => {
    return (
        <>
            <div className="bg-secondary text-white mt-sm tablet:mt-xl py-sm">
                <Container>
                    <div className="flex flex-col-reverse desktop:flex-row">
                        <div className="desktop:w-1/4"></div>
                        <div className="desktop:grow text-center">
                            <span className="font-fira text-white">
                                The Active Sloth ©{' '}
                                {new Date().getFullYear().toString()}
                            </span>
                        </div>

                        <div className="w-full mb-sm text-center desktop:mb-0 desktop:w-1/4 desktop:text-right">
                            <ScrollToTop />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer
