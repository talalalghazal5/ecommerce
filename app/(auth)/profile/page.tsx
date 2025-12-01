import { auth } from '@/auth'
import React from 'react'

export default async function ProfilePage() {
    const session = await auth();
    const user = session?.user;
    return (
        <main className='min-h-screen px-10 pt-20 flex items-center'>
            <h1 className='text-4xl'>This is the profile page</h1>
        </main>
    )
}
