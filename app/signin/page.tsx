import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import SigninButton from './components/SigninButton'

export default function SigninPage() {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <SigninButton></SigninButton>
        </div>
    )
}
