import React from 'react'
import SigninButton from '../components/SigninButton'
import SinginWithGoogleButton from '../components/SinginWithGoogleButton'

export default function SigninPage() {
    return (
        <div className="flex justify-evenly items-center min-h-screen">
            <div className="absolute w-75 h-75 rounded-full blur-3xl left-20 bg-linear-60 from-amber-300 to-orange-400">

            </div>
            <div className="relative">
                <h1 className='text-4xl font-bold text-foreground'>Welcome to StoreBrand!</h1>
                <h2 className='text-xl font-medium text-gray-700 mt-4 ml-2'>Please sign in to continue..</h2>
            </div>
            <div className='flex flex-col space-y-3 justify-center items-center border p-10 rounded-2xl shadow-2xl shadow-amber-300'>
                <SigninButton></SigninButton>
                <SinginWithGoogleButton />
            </div>
        </div>
    )
}
