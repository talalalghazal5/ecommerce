
import React from 'react'
import Image from "next/image";
import { auth } from '@/auth';


export default async function UserAvatar() {
    const session= await auth()
    if(!session?.user?.name) return null
    return (
        <Image src={session.user.image!} alt='' width={40} height={40} className='rounded-full'></Image>
    )
}
