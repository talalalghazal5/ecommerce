import { CartProvider } from '@/contexts/CartContext'
import { SessionProvider } from 'next-auth/react'
import { Geist, Rouge_Script } from 'next/font/google';
import React from 'react'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rougeScript = Rouge_Script({
  variable: "--font-rouge-script",
  subsets: ["latin"],
  weight: ["400"]
})


export default function CartLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    
    return (
        <html lang='en'>
            <SessionProvider>
                <CartProvider>
                    <body className={`${geistSans.className} ${rougeScript.variable} antialiased`}>
                        {children}
                    </body>
                </CartProvider>
            </SessionProvider>
        </html>
    )
}
