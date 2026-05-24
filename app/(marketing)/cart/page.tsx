'use client'
import CartItemCard from '@/components/main/cart/CartItemCard';
import { EmptySection } from '@/components/main/cart/EmptySection';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useCart } from '@/contexts/CartContext';
import { faCross, faMultiply, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import CheckoutButton from './components/CheckoutButton';
import ClearCartButton from './components/ClearCartButton';

export default function CartPage() {
    const cartProvider = useCart();
    const cart = cartProvider.cart;
    const length = cart.length;
    console.log(cart);
    useEffect(() => {
        cartProvider.calculateTotal();
    }, [cart, cartProvider])

    return (
        <main className='min-h-screen pt-30 px-20 grid grid-cols-3 gap-6    '>
            <div className="border rounded-2xl col-span-2 p-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Cart</h1>
                    <h1 className='text-black/50'>({length} products)</h1>
                    {length !== 0 && <ClearCartButton />}
                </div>
                {length !== 0 ? (
                    <>
                        <Table>
                            <TableHeader>
                                <TableRow className='border-none'>
                                    <TableHead>Product</TableHead>
                                    <TableHead className='text-center'>Quantity</TableHead>
                                    <TableHead>Total</TableHead>
                                </TableRow>
                            </TableHeader>
                        </Table>
                        <div className="grid gap-2">
                            {
                                cart.map((item) => (
                                    <CartItemCard key={item.id} item={item}></CartItemCard>
                                ))
                            }
                        </div>
                    </>
                ) : <div className='flex flex-col h-full justify-center'><EmptySection /></div>}

            </div>
            <div className="h-fit bg-gray-200 p-4 rounded-2xl">
                <h2 className='text-black/80 mb-3 font-semibold text-lg'>Promo code</h2>
                <div className="relative">
                    <input type="text" placeholder='Enter promo code' className='rounded-full border p-3 border-black/20 w-full' />
                    <Button disabled={length === 0} className='absolute right-1 bottom-[5] w-[100px] h-10 rounded-full'>Apply</Button>
                </div>
                    <Separator className='bg-black/20 mt-5'/>
                    <div className="flex flex-col mt-8 mb-4 space-y-3">
                        <div className="flex justify-between items-center">
                            <h3 className='text-gray-700 text-sm'>Subtotal:</h3>
                            <h3 className='text-gray-700 text-sm'>${cartProvider.total}</h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className='text-gray-700 text-sm'>Discount:</h3>
                            <h3 className='text-gray-700 text-sm'>- $0</h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className='text-black text-sm font-semibold'>Total:</h3>
                            <h3 className='text-black text-lg font-semibold'>${cartProvider.total}</h3>
                        </div>
                    </div>
                    <CheckoutButton disabled={length === 0} />

            </div>
        </main>
    );
}
