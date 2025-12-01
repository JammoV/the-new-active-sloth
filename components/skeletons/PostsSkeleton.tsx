import React, { FC } from 'react'

const PostsSkeleton: FC = () => {
    return (
        <div className="grid gap-sm grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 ">
            {Array.from({ length: 9 }).map((_, index) => (
                <div
                    className="animate-pulse aspect-video rounded-xl bg-gray-100 w-full h-full "
                    key={`skeleton-post-${index}`}
                />
            ))}
        </div>
    )
}

export default PostsSkeleton
