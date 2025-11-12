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
import { useRouter } from 'next/navigation';


export default function ProductCard({ product }: { product: Product, width?: number, height?: number }) {
    const [quantity, setQuantity] = useState<number>(1);
    const cart = useCart();
    const router = useRouter();



    const handleTransition = () => {
        router.push(`/product/${product.id}`)
    }
    return (
        <Card onClick={handleTransition} className='cursor-pointer hover:shadow-2xl transition-all'>
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
                <Button onClick={handleTransition} size={'default'} variant={'secondary'} className='cursor-pointer w-full'>See Details</Button>
            </CardFooter>
        </Card>
    )
}


