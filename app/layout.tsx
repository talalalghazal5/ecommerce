import { CartProvider } from '@/contexts/CartContext';
import { SessionProvider } from 'next-auth/react';
import { Geist, Rouge_Script } from 'next/font/google';
import '@/app/globals.css'
import React from 'react'
import { Metadata } from 'next';
import Providers from './providers';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const rougeScript = Rouge_Script({
    variable: "--font-rouge-script",
    subsets: ["latin"],
    weight: ["400"]
})

export const metadata: Metadata = {
    title: 'this is the root layout',

}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={`${geistSans.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
