'use client'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function SigninPage() {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Button onClick={() => signIn('github')}>sign in</Button>
        </div>
    )
}
