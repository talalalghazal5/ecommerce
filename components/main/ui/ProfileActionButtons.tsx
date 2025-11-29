'use client'
import { handleSignOut } from '@/actions/auth-actions'
import { Button } from '@/components/ui/button'
import { User2, History, DoorOpen } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ProfileActionButtons() {
    const router = useRouter();
    const handleViewProfile = () => {
        router.push('/profile');
    }
    const handleViewHistory = () => {
        router.push('/order-history')
    }
    const handleSignout = () => {
        handleSignOut();
    }
    return (
        <>
            <Button onClick={handleViewProfile} variant={'ghost'} size={'sm'} className='justify-start cursor-pointer' ><User2 /> View profile</Button>
            <Button onClick={handleViewHistory} variant={'ghost'} size={'sm'} className='justify-start cursor-pointer'><History></History>Order history</Button>
            <Button onClick={handleSignout} variant={'ghost'} size={'sm'} className='justify-start cursor-pointer hover:bg-red-100 text-red-700 hover:text-red-700'><DoorOpen></DoorOpen>Sign out</Button>
        </>
    )
}
