import React from 'react'
import { Button } from '../ui/button'

export default function NewsletterForm() {
    return (
        <>
            <div className="">
                <h1 className="font-semibold text-2xl text-white">
                    Get product drops and offers
                </h1>
                <h2 className="text-md text-white/50">Receive launch updates, restock alerts, and curated product recommendations.</h2>
            </div>
            <div className="">
                <form action="" className="flex space-x-3 items-center">
                    <input type="email" placeholder="Email address" className="border p-2 rounded-md bg-white" />
                    <Button className="rounded-md bg-blue-800 cursor-pointer hover:bg-blue-900 text-md" size={"lg"}>Join list</Button>
                </form>
            </div>
        </>
    )
}
