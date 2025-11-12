'use client'
import React, { useEffect } from 'react'
import { Button } from '../../ui/button'
import { Badge } from '../../ui/badge'
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function CartButton() {

    const cart = useCart();
    const router = useRouter();
    const session = useSession();
    const length = cart.cart.length;
    useEffect(() => {
        cart.calculateTotal();
    }, [cart, cart.total])

    const handleTransition = () => {
        if (session) router.push('/cart');
        else router.push('/signin');
    }

    return (
        <Button size={'icon-lg'} onClick={handleTransition} className='rounded-full text-center cursor-pointer bg-transparent hover:bg-muted relative'>
            {length !== 0 && <Badge variant={'destructive'} className='absolute top-0 right-[-1]'>{length}</Badge>}
            <i className='bx bx-cart text-3xl text-black' ></i>
        </Button>
    )
}
