import React from 'react'
import { Button } from '../ui/button'
import { AuroraText } from '../ui/aurora-text'

export default function Slogan() {
    return (
        <div>
            <h1 className="text-5xl font-bold">Shopping became <AuroraText colors={['oklch(76.9% 0.188 70.08), oklch(66.6% 0.179 58.318)']}>premium.</AuroraText></h1>
            <h2 className="mt-3 mb-4 max-w-2xl text-md text-gray-700">
                Discover a truly elevated shopping experience — curated collections handpicked for quality and style, effortless one-click checkout.
            </h2>
            <Button className="bg-blue-700 cursor-pointer hover:bg-blue-900 text-sm" size={"lg"}>Go shopping</Button>
        </div>
    )
}
