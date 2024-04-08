import type { FC } from 'react'
import { ContentTypeHeading } from '@/graphql/entities/Post'

interface HeadingProps {
    heading: ContentTypeHeading
}

const Heading: FC<HeadingProps> = ({ heading }) => {
    if (heading.level === 1) {
        return <h1>{heading.text}</h1>
    }
    if (heading.level === 2) {
        return (
            <h2
                className={`text-2xl font-merienda font-bold mt-12 mb-4`}
                id={heading.identifier}
            >
                {heading.text}
            </h2>
        )
    }
    if (heading.level === 3) {
        return (
            <h3
                className={`text-xl font-merienda my-2`}
                id={heading.identifier}
            >
                {heading.text}
            </h3>
        )
    }
    if (heading.level === 4) {
        return (
            <h4
                className={`text-lg font-medium pt-4 pb-2`}
                id={heading.identifier}
            >
                {heading.text}
            </h4>
        )
    }

    return <span>{heading.text}</span>
}

export default Heading
