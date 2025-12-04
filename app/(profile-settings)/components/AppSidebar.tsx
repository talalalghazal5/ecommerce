'use client'
import AppLogo from '@/components/AppLogo'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Bell, History, Settings, UserCircle2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function AppSidebar() {
    const pathname = usePathname();



    const menuItems = [
        {
            title: "My Profile",
            icon: UserCircle2,
            href: "/profile"
        },
        {
            title: "Order History",
            icon: History,
            href: "/order-history"
        },
        {
            title: "Notifications",
            icon: Bell,
            href: "/notifications"
        },
        {
            title: "Settings",
            icon: Settings,
            href: "/settings"
        },
    ]
    return (
        <Sidebar collapsible='icon'>
            <SidebarHeader>
                <AppLogo />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                menuItems.map((item) => (
                                    <SidebarMenuItem key={item.title} > 
                                        <SidebarMenuButton isActive={pathname === item.href.slice(0, item.href.length)}>
                                            <item.icon />
                                            <Link className='w-full' href={item.href}>{item.title}</Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
