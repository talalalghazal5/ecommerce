'use client'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function SigninPage() {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Button onClick={() => signIn('github', {redirectTo: "/"})}><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Continue with GitHub</Button>
        </div>
    )
}
