import React, { FC } from 'react'

interface PostDatesProps {
    publishedAt: Date
    updatedAt?: Date
}

const PostDates: FC<PostDatesProps> = ({ publishedAt, updatedAt }) => {
    return (
        <div className="flex flex-col tablet:flex-row tablet:items-center gap-xs my-sm desktop:my-md">
            <span className="font-noto text-sm desktop:text-primary desktop:text-lg">
                Geplaatst op{' '}
                {publishedAt.toLocaleDateString('nl', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </span>
            {updatedAt && (
                <>
                    <span className="hidden tablet:block">-</span>
                    <span className="font-noto text-sm text-primary/60 desktop:text-lg">
                        bijgewerkt op{' '}
                        {updatedAt.toLocaleDateString('nl', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </span>
                </>
            )}
        </div>
    )
}

export default PostDates
