'use client'

import Link from 'next/link'
import { FC, useRef, useState } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cn } from '@/utils/cn'

export interface ContentHeading {
    identifier: string
    text: string
    level: number
}

interface TableOfContentsProps {
    headers: ContentHeading[]
}

const MobileTableOfContents: FC<TableOfContentsProps> = ({ headers }) => {
    const [collapsed, setCollapsed] = useState(true)
    const contentRef = useRef<HTMLDivElement>(null)

    return (
        <div className="flex flex-col my-xs p-xs  h-full border-b border-primary-light bg-primary-lighter desktop:hidden">
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="flex flex-row px-sm py-xs justify-between items-center    text-primary"
            >
                <span className="text-sm font-semibold">Inhoud</span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={cn(
                        'w-sm transition-transform duration-200',
                        !collapsed && 'rotate-180'
                    )}
                />
            </button>

            <div
                ref={contentRef}
                style={{
                    height: collapsed ? 0 : contentRef.current?.scrollHeight,
                    overflow: 'hidden',
                    transition: 'height 0.2s ease-in-out',
                }}
            >
                <div className="flex flex-col gap-sm p-sm">
                    {headers.map((header) => (
                        <Link
                            href={`#${header.identifier}`}
                            key={header.identifier}
                            className={cn(
                                'text-green-primary text-sm hover:underline',
                                header.level === 3 && 'pl-sm'
                            )}
                            onClick={() => setCollapsed(true)}
                        >
                            {header.text}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileTableOfContents
