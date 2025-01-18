import type { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren> = ({ children }) => (
    <div className="px-sm tablet:container tablet:mx-auto h-full relative">
        {children}
    </div>
)

export default Container
