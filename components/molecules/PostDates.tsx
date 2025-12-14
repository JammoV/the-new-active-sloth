import React, { FC } from 'react'
import { getLocale, getTranslations } from 'next-intl/server'

interface PostDatesProps {
    publishedAt: Date
    updatedAt?: Date
}

const PostDates: FC<PostDatesProps> = async ({ publishedAt, updatedAt }) => {
    const t = await getTranslations('Post')
    const locale = await getLocale()
    return (
        <div className="flex flex-col tablet:flex-row tablet:items-center gap-xs my-sm desktop:my-md">
            <span className="font-noto text-sm desktop:text-primary desktop:text-lg">
                {t('created-at', {
                    date: publishedAt.toLocaleDateString(locale, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }),
                })}
            </span>
            {updatedAt && (
                <>
                    <span className="hidden tablet:block">-</span>
                    <span className="font-noto text-sm text-primary/60 desktop:text-lg">
                        {t('updated-at', {
                            date: updatedAt.toLocaleDateString(locale, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            }),
                        })}
                    </span>
                </>
            )}
        </div>
    )
}

export default PostDates
