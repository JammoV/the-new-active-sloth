import React, { FC, ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

interface PostLinkProps {
    title: string
    categorySlug: string
    postSlug: string
    children: ReactNode
}

const PostLink: FC<PostLinkProps> = async ({ title, categorySlug, postSlug, children }) => {
    const t = await getTranslations('Generic')

    return (
        <Link
            href={`/${categorySlug}/${postSlug}`}
            title={`${t('view-post')}: ${title}`}
            className="text-[#d2916b] font-bold underline underline-offset-4"
        >
            {children}
        </Link>
    )
}

export default PostLink
