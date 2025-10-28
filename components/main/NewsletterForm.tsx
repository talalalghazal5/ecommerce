import React from 'react'
import { Button } from '../ui/button'

export default function NewsletterForm() {
    return (
        <>
            <div className="">
                <h1 className="font-semibold text-2xl text-white">
                    Subscribe to our newsletter
                </h1>
                <h2 className="text-md text-white/50">Send your email address to get in touch with our latest news and products</h2>
            </div>
            <div className="">
                <form action="" className="flex space-x-3 items-center">
                    <input type="email" placeholder="Enter your email" className="border p-2 rounded-md bg-white" />
                    <Button className="rounded-md bg-blue-800 cursor-pointer hover:bg-blue-900 text-md" size={"lg"}>Subscribe</Button>
                </form>
            </div>
        </>
    )
}
