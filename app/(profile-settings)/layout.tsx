import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import AppSidebar from './components/AppSidebar'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "this is the profile layout",
}

export default function ProfileLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <SidebarProvider >
            <AppSidebar />
            <div>
                <header className="px-6 py-3 flex items-center backdrop-blur-3xl z-50 justify-between fixed w-full border-b">
                    <SidebarTrigger />
                </header>
                {children}
            </div>
        </SidebarProvider>

    )
}
