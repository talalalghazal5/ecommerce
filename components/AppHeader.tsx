import React from 'react'
import { Navbar } from './Navbar'
import Searchbar from './Searchbar'
import 'boxicons/css/boxicons.min.css'
import AppLogo from './AppLogo'
import SignOutButton from './main/ui/SignOutButton'
import { auth } from '@/auth'
import UserAvatar from './main/ui/UserAvatar'
import Link from 'next/link'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import CartButton from './main/cart/CartButton'

export default async function AppHeader() {
    const session = await auth();
    const user = session?.user;
    return (
        <header className='px-6 py-3 flex items-center backdrop-blur-3xl z-50 justify-evenly fixed w-full border-b'>
            <AppLogo />
            <Navbar />
            <Searchbar />
            <div className="flex gap-7 items-center">
                <CartButton />
                {user ? <UserAvatar /> : <Link href={'/signin'}>Sign in</Link>}
                {user && <SignOutButton />}
            </div>
        </header>
    )
}



