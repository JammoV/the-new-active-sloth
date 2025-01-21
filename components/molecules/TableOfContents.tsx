import Link from 'next/link'
import type { FC } from 'react'

export interface ContentHeading {
    identifier: string
    text: string
    level: number
}

interface TableOfContentsProps {
    headers: ContentHeading[]
}

const TableOfContents: FC<TableOfContentsProps> = ({ headers }) => {
    return (
        <div className="hidden desktop:flex flex-col  bg-primary-lighter rounded-xl py-md px-lg">
            <span className="font-noto text-[22px] mb-sm">Inhoudsopgave</span>
            {headers.map((header) => (
                <Link
                    href={`#${header.identifier}`}
                    key={header.identifier}
                    className={`text-green-primary hover:underline ${
                        header.level === 3
                            ? 'pl-4 text-xs mb-xs'
                            : 'test-sm mb-[8px]'
                    }`}
                >
                    {header.text}
                </Link>
            ))}
        </div>
    )
}

export default TableOfContents
