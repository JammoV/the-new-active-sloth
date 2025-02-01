import type { FC } from 'react'

/**
 * Needed because Tailwind V4 no longer supports safelist
 */
const Safelist: FC = () => (
    <div>
        <div className="object-bottom"></div>
        <div className="object-left"></div>
        <div className="object-left-bottom"></div>
        <div className="object-left-top"></div>
        <div className="object-right"></div>
        <div className="object-right-bottom"></div>
        <div className="object-right-top"></div>
        <div className="object-top"></div>
    </div>
)

export default Safelist
