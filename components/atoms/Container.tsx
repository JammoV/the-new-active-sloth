import type { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren> = ({ children }) => (
    <div className="container mx-auto h-full relative">{children}</div>
)

export default Container
