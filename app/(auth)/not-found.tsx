import { Button } from '@/components/ui/button'
import { MorphingText } from '@/components/ui/morphing-text'
import { TextAnimate } from '@/components/ui/text-animate'
import React from 'react'

export default function NotFound() {
    return (
        <main className='flex flex-col space-y-3 justify-center items-center min-h-screen'>
            <MorphingText texts={['404', 'Not Found']}></MorphingText>
            <h3 className='text-2xl font-semibold'>Page not found!</h3>
            <p className='text-zinc-500'>the page you are looking for is not found</p>
            <Button>Go home</Button>
        </main>
    )
}
