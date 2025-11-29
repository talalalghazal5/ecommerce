import React from 'react'
import Image from "next/image";
import { auth } from '@/auth';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { User2, History, DoorOpen } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import ProfileActionButtons from './ProfileActionButtons';


export default async function UserAvatar() {
    const session = await auth()
    if (!session?.user?.name) return null

    return (
        <HoverCard>
            <HoverCardTrigger>
                <Image src={session.user.image!} alt='' width={40} height={40} className='rounded-full cursor-pointer'></Image>
            </HoverCardTrigger>
            <HoverCardContent>
                <div className="flex flex-col space-y-3">
                    <div className="flex flex-col space-y-1">
                        <h2 className='font-semibold text-xl'>{session.user.name}</h2>
                        <h3 className='text-sm text-gray-500'>{session.user.email}</h3>
                    </div>
                    <Separator />
                    {/* <Link href={''} className='text-sm w-full hover:bg-gray-100 py-2 px-2 rounded-md'><FontAwesomeIcon icon={faUser} /> View profile</Link> */}
                    <ProfileActionButtons />
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
