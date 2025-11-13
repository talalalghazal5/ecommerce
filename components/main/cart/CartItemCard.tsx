'use client'
import QuantitySelector from '@/app/(marketing)/product/components/QuantitySelector';
import { useCart } from '@/contexts/CartContext';
import { CartItem } from '@/data/types';
import Image from 'next/image'
import React, { useState } from 'react'
import DeletionAlert from './DeletionAlert';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CartItemCard({ item }: { item: CartItem }) {
    const cart = useCart()
    const [quantity, setQuantity] = useState<number>(item.quantity);
    const totalForItem = item.product.price * quantity

    const handleQtyIncrement = () => {
        setQuantity(prev => {
            const newQty = prev + 1;
            setTimeout(() => {
                cart.updateQuantity(item.id, newQty);
            }, 1000)
            return newQty;
        });
    }
    const handleQtyDecrement = () => {
        setQuantity(prev => {
            if (prev === 1) {
                setTimeout(() => {
                    cart.removeFromCart(item.id);
                }, 200)
                return 1;
            }
            const newQty = Math.max(1, prev - 1);
            setTimeout(() => {
                cart.updateQuantity(item.id, newQty);
            }, 1000)
            return newQty;
        });
    }
    const handleDeletion = () => {
        cart.removeFromCart(item.id);
    }

    return (
        <div className="flex items-center justify-between w-full border rounded-2xl p-4">
            {/* Product Info */}
            <div className="flex items-center gap-6 w-[45%]">
                <div className="w-[90px] h-[90px] flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                        src={item.product.imagepath}
                        alt={item.product.title}
                        width={90}
                        height={90}
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="font-semibold text-base text-black/90 leading-tight">
                        {item.product.title}
                    </h1>
                    <h3 className="text-sm font-semibold text-black/50">
                        ${item.product.price}
                    </h3>
                </div>
            </div>

            {/* Quantity */}
            <div className="flex justify-center w-[25%]">
                <QuantitySelector
                    quantity={quantity}
                    onIncrement={handleQtyIncrement}
                    onDecrement={handleQtyDecrement}
                />
            </div>

            {/* Total */}
            <div className="flex justify-center items-center w-[15%]">
                <h3 className="text-lg font-semibold text-black/70">
                    ${totalForItem}
                </h3>
            </div>

            {/* Delete */}
            <div className="flex justify-center items-center w-[10%]">
                <DeletionAlert onClick={handleDeletion}>
                    <Button
                        size="icon-sm"
                        variant="secondary"
                        className="cursor-pointer bg-red-200 text-red-700"
                        title="Delete from cart"
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </DeletionAlert>
            </div>
        </div>

    )
}
