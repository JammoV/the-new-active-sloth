import Link from 'next/link'
import type { FC } from 'react'
import { ContentTypeHeading } from '@/graphql/entities/Post'

interface TableOfContentsProps {
    headers: ContentTypeHeading[]
}

const TableOfContents: FC<TableOfContentsProps> = ({ headers }) => {
    return (
        <div className="mb-4 p-4 flex flex-col border border-orange gap-1 sticky top-4">
            <span className="font-merienda text-xl font-bold">Inhoud</span>
            {headers.map((header) => (
                <Link
                    href={`#${header.identifier}`}
                    key={header.identifier}
                    className={`text-green-primary hover:underline ${
                        header.level === 3 ? 'pl-4 text-sm' : ''
                    }`}
                >
                    {header.text}
                </Link>
            ))}
        </div>
    )
}

export default TableOfContents
