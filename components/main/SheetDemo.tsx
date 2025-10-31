'use client'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { CartItemCard } from "./cart/CartItem";
import DeletionAlert from "./cart/DeletionAlert";
import { EmptySection } from "./cart/EmptySection";
import { Badge } from "../ui/badge";

import React, { useEffect } from 'react'
import { useCart } from "@/contexts/CartContext";

export default function SheetDemo() {
    const cart = useCart();
    const length = cart.cart.length;
    useEffect(() => {
        cart.calculateTotal();
    }, [cart, cart.total])
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size={'icon-lg'} className='rounded-full text-center cursor-pointer bg-transparent hover:bg-muted relative'>
                    {length !== 0 && <Badge variant={'destructive'} className='absolute top-0 right-[-1]'>{length}</Badge>}
                    <i className='bx bx-cart text-3xl text-black' ></i>
                </Button>
            </SheetTrigger>
            <SheetContent className='gap-1'>
                <SheetHeader>
                    <SheetTitle className='text-lg'>My Cart {length !== 0 && <span className='text-gray-400 text-sm'>({length} {length > 1 ? 'items' : 'item'})</span>} </SheetTitle>
                    {
                        cart.cart.length !== 0 && <DeletionAlert onClick={cart.clearCart}><Button variant={'secondary'} className='bg-red-100 text-red-700 cursor-pointer'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Clear cart</Button></DeletionAlert>
                    }
                </SheetHeader>
                <div className={`px-4 ${cart.cart.length <= 2 ? 'overflow-hidden' : 'overflow-scroll'}`}>
                    <div className="grid gap-2">
                        {cart.cart.length === 0 && <EmptySection />}
                        {
                            cart.cart.map((item) => (
                                <CartItemCard key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
                <SheetFooter>
                    {
                        length !== 0 && (<>
                            <div className="flex justify-between text-gray-500">
                                <h2>Number of items:</h2>
                                <h2>{length}</h2>
                            </div>
                            <div className="flex justify-between">
                                <h2 className='font-semibold'>Total Cost:</h2>
                                <h2 className='font-semibold'>${cart.total}</h2>
                            </div>
                        </>)
                    }
                    <Button type="submit" className='cursor-pointer' disabled={length === 0}>Checkout</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
