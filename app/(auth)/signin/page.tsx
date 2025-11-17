import React from 'react'
import SigninButton from '../components/SigninButton'
import SinginWithGoogleButton from '../components/SinginWithGoogleButton'
import { BorderBeam } from '@/components/ui/border-beam'

export default function SigninPage() {
    return (
        <div className="flex relative justify-evenly items-center min-h-screen">
            <div className="absolute w-75 h-75 rounded-full blur-3xl left-20 bg-linear-60 z-[-1] from-amber-300 to-orange-400">

            </div>
            <div className="">
                <h1 className='text-4xl font-bold text-foreground'>Welcome to StoreBrand!</h1>
                <h2 className='text-xl font-medium text-gray-700 mt-4 ml-2'>Please sign in to continue..</h2>
            </div>
            <div className='flex relative flex-col gap-3 items-center border p-10 rounded-2xl shadow-2xl shadow-amber-300'>
                <SigninButton></SigninButton>
                <SinginWithGoogleButton />
                <BorderBeam size={100} duration={6} borderWidth={1.5} />
                <BorderBeam size={100} duration={6} borderWidth={1.5} delay={3} />
            </div>
        </div>
    )
}
