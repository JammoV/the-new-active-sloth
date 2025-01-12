import type { FC } from 'react'
import React from 'react'

import type { Category } from '@/interfaces/Category'

interface CategoryFilterProps {
    categories: Category[]
    activeCategory: Category | null
    clickHandler: (category: Category) => void
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
            {categories.map((category: Category) => (
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
