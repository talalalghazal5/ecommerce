'use client'
import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'

export default function NotSignedAlert() {
    const router = useRouter();
    const cart = useCart();
    const length = cart.cart.length;
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild><Button type="submit" className='cursor-pointer' disabled={length === 0}>Checkout</Button></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>You are not signed in</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>Please sign in to create an account to continue to checkout</AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={() => router.push('/signin')}>
                        Sign in
                    </AlertDialogAction>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
