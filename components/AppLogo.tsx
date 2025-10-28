import Link from 'next/link'
import React from 'react'

export default function AppLogo() {
    return (
        <Link href='/' className='font-bold text-2xl'>Store<span className='text-amber-500'>Brand.</span></Link>
    )
}
