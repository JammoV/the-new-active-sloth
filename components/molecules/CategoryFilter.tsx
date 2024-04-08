import type { FC } from 'react'
import React from 'react'

import type { ICategory } from '@/graphql/entities/Category'

interface CategoryFilterProps {
    categories: ICategory[]
    activeCategory: ICategory | null
    clickHandler: (category: ICategory) => void
}

const CategoryFilter: FC<CategoryFilterProps> = ({
    categories,
    activeCategory,
    clickHandler,
}) => {
    return (
        <div className="flex flex-wrap justify-center items-center md:flex-row gap-2">
            <span className="font-medium text-sm text-gray-700">
                Filter op:
            </span>
            {categories.map((category: ICategory) => (
                <span
                    key={category.name}
                    className={`py-1 px-2 text-sm border cursor-pointer rounded-full ${
                        category.id === activeCategory?.id
                            ? 'border-green-primary text-white bg-green-primary'
                            : 'border-gray-400 text-gray-400'
                    } `}
                    onClick={(): void => clickHandler(category)}
                >
                    {category.name}
                </span>
            ))}
        </div>
    )
}

export default CategoryFilter
