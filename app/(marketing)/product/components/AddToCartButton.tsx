'use client'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/CartContext'
import { CartItem, Product } from '@/data/types';
import React, { useState } from 'react'

export default function AddToCartButton({ product }: { product: Product }) {
    const [quantity, setQuantity] = useState<number>(1);
    const [added, setAdded] = useState<boolean>(false);
    const cart = useCart();
    const handleAddToCart = () => {
        const cartItem = { id: product.id, product: product, quantity: quantity };
        if (cart.cart.includes(cartItem)) setQuantity(quantity + 1)
        cart.addToCart(cartItem);
        setAdded(true)
    }
    const handleRemoveFromCart = () => {
        const removedItem = cart.cart.find(item => item.product.id === product.id)
        cart.removeFromCart(removedItem?.id ?? '');
        setAdded(false);
    }
    return (
        <Button className='w-full mb-4 cursor-pointer' variant={added ? 'secondary' : 'default'} onClick={added ? handleRemoveFromCart : handleAddToCart}>{added ? ('Remove from cart') : (<><i className='bx bx-cart text-xl'></i> Add to Cart</>)}</Button>
    )
}
