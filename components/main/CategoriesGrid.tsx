import React from 'react'
import { CategoryCard } from './ui/CategoryCard'
import { components } from '@/data/data'

export default function CategoriesGrid() {
    return (
        <>
            <h1 className="text-3xl text-center font-bold mb-10">Shop by category</h1>
            <div className="grid grid-cols-3 w-full lg:w-3/4 gap-5">
                {components.map((category) => (
                    <CategoryCard key={category.title} category={category} />
                ))}
            </div>
        </>
    )
}
