import type { FC } from 'react'
import { generateIdentifier } from '@/utils/generateIdentifier'

interface HeadingProps {
    level: number
    value: string
}

const Heading: FC<HeadingProps> = ({ level, value }) => {
    const identifier = generateIdentifier(value)

    if (level === 1) {
        return <h1>{value}</h1>
    }
    if (level === 2) {
        return (
            <h2
                className={`text-2xl desktop:text-3xl font-noto -mb-sm tablet:-mb-0`}
                id={identifier}
            >
                {value}
            </h2>
        )
    }
    if (level === 3) {
        return (
            <h3
                className={`text-xl desktop:text-2xl font-noto -mb-sm tablet:-mb-0`}
                id={identifier}
            >
                {value}
            </h3>
        )
    }
    if (level === 4) {
        return (
            <h4
                className={`font-bold font-noto desktop:font-medium -mb-xs desktop:text-xl desktop:-mb-sm`}
                id={identifier}
            >
                {value}
            </h4>
        )
    }

    return <span>{value}</span>
}

export default Heading
