import type { FC } from 'react'
import React from 'react'

import Container from '@/atoms/Container'

const Footer: FC = () => {
    return (
        <>
            <div className="bg-green-primary text-white">
                <Container>
                    <div className="pb-8">
                        <h2 className="font-merienda text-center">
                            The Active Sloth © 2024
                        </h2>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer
