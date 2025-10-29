'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import Image from "next/image";
import { Button } from '../../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Product } from '@/data/types';
import { useCart } from '@/contexts/CartContext';
import DeletionAlert from '../cart/DeletionAlert';

type QuantitySelectorProps = {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    isProductCard?: boolean;
}

export const QuantitySelector = ({ quantity, onIncrement, onDecrement, isProductCard }: QuantitySelectorProps) => {
    return (
        <div className="flex">
            {quantity === 1 && !isProductCard ? <DeletionAlert onClick={onDecrement}><Button size={'icon-sm'} variant={'outline'} className='rounded-br-none rounded-tr-none cursor-pointer'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></Button>
            </DeletionAlert> : <Button size={'icon-sm'} variant={'outline'} onClick={onDecrement} className='rounded-br-none rounded-tr-none'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></Button>
            }
            <div className="w-[30px] text-center flex justify-center items-center border">{quantity}</div>
            <Button size={'icon-sm'} variant={'outline'} onClick={onIncrement} className='rounded-bl-none rounded-tl-none cursor-pointer'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></Button>
        </div>
    )
}

export default function ProductCard({ product }: { product: Product }) {
    const [quantity, setQuantity] = useState<number>(1);
    const cart = useCart();

    const handleQtyIncrement = () => {
        setQuantity(prev => prev + 1);
    }

    const handleQtyDecrement = () => {
        setQuantity(prev => Math.max(1, prev - 1));
    }
    const handleAddToCart = () => {
        const cartItem = { id: product.id, product: product, quantity: quantity };
        if (cart.cart.includes(cartItem)) setQuantity(quantity + 1)
        cart.addToCart(cartItem);
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <Image src={product.imagepath} alt='' width={300} height={300}></Image>
                </CardTitle>
                <CardTitle className=''>{product.title}</CardTitle>
                <CardTitle className='text-chart-5 font-bold'>{product.price}$</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{product.description}</CardDescription>
            </CardContent>
            <CardFooter className='justify-between'>
                <Button onClick={handleAddToCart}>Add to cart</Button>
                <QuantitySelector isProductCard quantity={quantity} onIncrement={handleQtyIncrement} onDecrement={handleQtyDecrement} />
            </CardFooter>
        </Card>
    )
}


