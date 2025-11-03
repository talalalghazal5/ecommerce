import React from 'react'

export default function ErrorPage() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <h1 className='text-4xl text-foreground font-bold'>Error occured..</h1>
        <h2 className='text-lg text-gray-600 font-medium'>try sigining in again</h2>
    </div>
  )
}
