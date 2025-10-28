'use client'
import React from 'react'
import { Navbar } from './Navbar'
import Searchbar from './Searchbar'
import { Button } from './ui/button'
import 'boxicons/css/boxicons.min.css'
import AppLogo from './AppLogo'


import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useCart } from '@/contexts/CartContext'
import { CartItemCard } from './main/cart/CartItem'
import { EmptySection } from './main/cart/EmptySection'

export function SheetDemo() {
    const cart = useCart();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size={'icon-lg'} className='rounded-full cursor-pointer bg-transparent hover:bg-muted'><i className='bx bx-cart text-2xl text-black' ></i></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className='text-lg'>My Cart</SheetTitle>
                </SheetHeader>
                <div className={`grid flex-1 auto-rows-min gap-6 px-4 ${cart.cart.length <= 2 ? 'overflow-hidden' : 'overflow-scroll'}`}>
                    <div className="grid gap-3">
                        {cart.cart.length === 0 && <EmptySection/>}
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
                    <Button type="submit">Save changes</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
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



