import React from 'react'

export default function notFoundPage() {
    return (
        <main className='flex justify-center items-center min-h-screen bg-background'>
            <div className="flex flex-col items-center">
                <h1 className='text-9xl text-center font-bold text-primary'>404</h1>
                <h2 className='text-3xl font-semibold text-gray-600'>Page not found!</h2>
                <p className='text-lg text-gray-500 mt-3'>Oops.. It seems that what you are looking for is not found</p>
            </div>
        </main>
    )
}
