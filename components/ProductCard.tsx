'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import img from '@/public/images/product003.png'
import Image from "next/image";
import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';


export default function ProductCard() {
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <Image src={img} width={300} height={300} alt='product image'></Image>
                </CardTitle>
                <CardTitle className=''>iPhone 16 Pro Max</CardTitle>
                <CardTitle className='text-chart-5 font-bold'>1199$</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>this is a second description about the card and the product to make it longer</CardDescription>
            </CardContent>
            <CardFooter className='justify-between'>
                <Button>Add to cart</Button>
                <QuantitySelector quantity={quantity}/>
            </CardFooter>
        </Card>
    )
}



export function QuantitySelector({ quantity }: { quantity: number }) {
    return (
        <div className="flex">
            <Button size={'icon-sm'} variant={'outline'} className='rounded-br-none rounded-tr-none'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></Button>
            <div className="w-[30px] text-center flex justify-center items-center border">{quantity}</div>
            <Button size={'icon-sm'} variant={'outline'} className='rounded-bl-none rounded-tl-none '><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></Button>
        </div>
    )
}