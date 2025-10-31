import React from 'react'
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
import { faDoorOpen, faTrash } from '@fortawesome/free-solid-svg-icons'
import DeletionAlert from './main/cart/DeletionAlert'
import { Badge } from './ui/badge'
import SignOutButton from './main/ui/SignOutButton'
import SheetDemo from './main/SheetDemo'
import { auth } from '@/auth'
import UserAvatar from './main/ui/UserAvatar'
import SigninButton from '@/app/signin/components/SigninButton'
import { link } from 'fs'
import Link from 'next/link'

export default async function AppHeader() {
    const session = await auth();
    const user = session?.user;
    return (
        <header className='px-6 py-3 flex items-center backdrop-blur-3xl z-50 justify-evenly fixed w-full border-b'>
            <AppLogo />
            <Navbar />
            <Searchbar />
            <div className="flex gap-7 items-center">
                <SheetDemo />
                {user ? <UserAvatar /> : <Link href={'/signin'}>Sign in</Link>}
                {user && <SignOutButton />}
            </div>
        </header>
    )
}



