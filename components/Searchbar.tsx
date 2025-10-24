import React from 'react'
import 'boxicons/css/boxicons.min.css'

export default function Searchbar() {
    return (
        <form action="query" className='relative'>
            <input type="text" placeholder='Search...' className='px-5 py-2 rounded-full max-w-lg border border-gray-200 bg-gray-100 focus:ring-amber-300 focus:ring-2 focus:outline-none transition-all' />
            <i className='bx bx-search absolute top-1/4 right-3 text-xl text-gray-400'></i>
        </form>
    )
}
