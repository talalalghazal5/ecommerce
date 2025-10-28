import React from 'react'
import ProductCard from './ui/ProductCard'
import { products } from '@/data/data'

export default function ProductsGrid() {
    return (
        <>
            <h1 className="text-3xl text-center font-bold mt-3 mb-10">Featured Products</h1>
            <div className="grid grid-cols-3 w-full lg:w-3/4 gap-5">
                {
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </>
    )
}
