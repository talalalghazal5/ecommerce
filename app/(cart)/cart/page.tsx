'use client'
import { CartItemCard } from '@/components/main/cart/CartItem';
import { useCart } from '@/contexts/CartContext';
import React from 'react'

export default function CartPage() {
    const cartProvider = useCart();
    const cart = cartProvider.cart; 
    console.log(cart);
    
    return (
        <main className='min-h-screen pt-20'>
            <div className="grid gap-2">
                {
                    cart.map((item) => (
                        <CartItemCard key={item.id} item={item}></CartItemCard>
                    ))
                }
            </div>
        </main>
    );
}
