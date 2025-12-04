import { auth } from '@/auth'
import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';
import SignOutButton from '@/components/main/ui/SignOutButton';

export default async function ProfilePage() {
    const session = await auth();
    const user = session?.user;
    return (
        <>
            <main className='min-h-screen px-10 pt-20'>
                <h1 className='text-3xl font-semibold mb-5'>Profile</h1>    
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div className="flex flex-col py-10 justify-center items-center space-y-3 border rounded-lg">
                        <Image src={user?.image ?? ''} alt='profile image' width={200} height={200} className='rounded-full'></Image>
                        <h2 className='text-2xl font-semibold mt-4'>{user?.name}</h2>
                        <div className="mt-10">
                            <SignOutButton />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 m-auto mx-5 p-10 col-span-2 h-fit gap-5 w-fit">
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input type="text" title='email' value={user?.email ?? ''} readOnly className='h-10 p-3 text-gray-600 border rounded-lg' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Phone number</label>
                            <input type="text" title='email' value={'+963985654712'} readOnly className='h-10 p-3 text-gray-600 border rounded-lg' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Country</label>
                            <input type="text" title='email' value={'Syria'} readOnly className='h-10 p-3 text-gray-600 border rounded-lg' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">City</label>
                            <input type="text" title='email' value={'As Suwayda'} readOnly className='h-10 p-3 text-gray-600 border rounded-lg' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">ZIP code</label>
                            <input type="text" title='email' value={'90154'} readOnly className='h-10 p-3 text-gray-600 border rounded-lg' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Default payment method</label>
                            <input type="text" title='email' value={'PayPal'} readOnly className='h-10 p-3 text-gray-600 border rounded-lg' />
                        </div>

                        {/* <Button variant={'destructive'} >Sign out</Button> */}
                    </div>
                </div>
            </main>

        </>
    )
}
