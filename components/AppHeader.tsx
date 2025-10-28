import Link from 'next/link'
import React from 'react'
import { Navbar } from './Navbar'
import Searchbar from './Searchbar'
import { Button } from './ui/button'
import 'boxicons/css/boxicons.min.css'
import AppLogo from './AppLogo'


export default function AppHeader() {
    return (
        <header className='px-6 py-3 flex items-center backdrop-blur-3xl z-50 justify-evenly fixed w-full border-b'>
            <AppLogo />
            <Navbar />
            <Searchbar />
            <div className="flex gap-7">
                <Button size={'icon-lg'} className='rounded-full cursor-pointer bg-transparent hover:bg-muted'><i className='bx bx-cart text-2xl text-black' ></i></Button>
                <Button size={'icon-lg'} className='rounded-full cursor-pointer bg-transparent hover:bg-muted'><i className='bx bx-user text-2xl text-black' ></i></Button>
            </div>
        </header>
    )
}
