import type { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren> = ({ children }) => (
    <div className="px-sm tablet:container tablet:max-w-[1280px] tablet:mx-auto h-full relative">
        {children}
    </div>
)

export default Container
