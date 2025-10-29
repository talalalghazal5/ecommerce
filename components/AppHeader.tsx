'use client'
import React, { useEffect } from 'react'
import { Navbar } from './Navbar'
import Searchbar from './Searchbar'
import { Button } from './ui/button'
import 'boxicons/css/boxicons.min.css'
import AppLogo from './AppLogo'


import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useCart } from '@/contexts/CartContext'
import { CartItemCard } from './main/cart/CartItem'
import { EmptySection } from './main/cart/EmptySection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import DeletionAlert from './main/cart/DeletionAlert'

export function SheetDemo() {
    const cart = useCart();
    const length = cart.cart.length;
    useEffect(() => {
        cart.calculateTotal();
    }, [cart, cart.total])
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size={'icon-lg'} className='rounded-full cursor-pointer bg-transparent hover:bg-muted'><i className='bx bx-cart text-2xl text-black' ></i></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className='text-lg'>My Cart {length !== 0 && <span className='text-gray-400 text-sm'>({length} {length > 1 ? 'items' : 'item'})</span>} </SheetTitle>
                    {
                        cart.cart.length !== 0 && <DeletionAlert onClick={cart.clearCart}><Button variant={'secondary'} className='bg-red-200 text-red-700 cursor-pointer'>Clear cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button></DeletionAlert>
                    }
                </SheetHeader>
                <div className={`px-4 ${cart.cart.length <= 2 ? 'overflow-hidden' : 'overflow-scroll'}`}>
                    <div className="grid gap-3">
                        {cart.cart.length === 0 && <EmptySection />}
                        {
                            cart.cart.map((item) => (
                                <CartItemCard key={item.id} item={item} />
                            ))
                        }
                    </div>
                    <div className="grid gap-3">
                        {/* <Label htmlFor="sheet-demo-username">Username</Label>
                        <Input id="sheet-demo-username" defaultValue="@peduarte" /> */}
                    </div>
                </div>
                <SheetFooter>
                    {
                        length !== 0 && <div className="flex justify-between">
                            <h2 className='font-semibold'>Total Cost:</h2>
                            <h2 className='font-semibold'>${cart.total}</h2>
                        </div>
                    }
                    <Button type="submit" className='cursor-pointer' disabled={length === 0}>Checkout</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}



export default function AppHeader() {
    return (
        <header className='px-6 py-3 flex items-center backdrop-blur-3xl z-50 justify-evenly fixed w-full border-b'>
            <AppLogo />
            <Navbar />
            <Searchbar />
            <div className="flex gap-7">

                <SheetDemo />
                <Button size={'icon-lg'} className='rounded-full cursor-pointer bg-transparent hover:bg-muted'><i className='bx bx-user text-2xl text-black' ></i></Button>
            </div>
        </header>
    )
}



