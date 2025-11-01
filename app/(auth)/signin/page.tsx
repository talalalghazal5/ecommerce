import React from 'react'
import SigninButton from '../components/SigninButton'
import SinginWithGoogleButton from '../components/SinginWithGoogleButton'

export default function SigninPage() {
    return (
        <div className='min-h-screen flex flex-col space-y-3 justify-center items-center'>
            <SigninButton></SigninButton>
            <SinginWithGoogleButton />
        </div> 
    )
}
