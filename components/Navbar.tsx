"use client"

import * as React from "react"
import Link from "next/link"
import 'boxicons/css/boxicons.min.css'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { components } from "@/data/data"




export function Navbar() {

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex-wrap">
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Categories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                    colorClass={component.colorClass}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + " bg-transparent"}>
                        <Link href="/docs" className="flex flex-wrap"><i className="bx bx-store text-lg"></i>Products</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    colorClass,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string, colorClass:string}) {
    return (
        <li {...props}>
            <NavigationMenuLink className={colorClass} asChild>
                <Link href={href}> 
                    <div className="text-lg leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-md leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
